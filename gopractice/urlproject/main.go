package main

import (
	"encoding/base64"
	"fmt"
	"log"
	"net/http"
	"sync"
)

// URLShortener is a simple URL shortener that uses a map to store the shortened URLs
type URLShortener struct {
	mu   sync.RWMutex
	urls map[string]string
}

// NewURLShortener returns a new URLShortener instance
func NewURLShortener() *URLShortener {
	return &URLShortener{
		urls: make(map[string]string),
	}
}

// Shorten takes a URL and returns a shortened version
func (s *URLShortener) Shorten(url string) string {
	s.mu.Lock()
	defer s.mu.Unlock()

	// Generate a random 6-character code
	code := base64.StdEncoding.EncodeToString([]byte(url))[:6]

	// Store the URL in the map
	s.urls[code] = url

	return fmt.Sprintf("http://localhost:8080/%s", code)
}

// Redirect takes a shortened code and redirects to the original URL
func (s *URLShortener) Redirect(w http.ResponseWriter, r *http.Request) {
	s.mu.RLock()
	defer s.mu.RUnlock()

	code := r.URL.Path[1:] // Remove the leading slash
	url, ok := s.urls[code]
	if !ok {
		http.Error(w, "Not found", http.StatusNotFound)
		return
	}

	http.Redirect(w, r, url, http.StatusFound)
}

func main() {
	shortener := NewURLShortener()

	http.HandleFunc("/shorten", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != "POST" {
			http.Error(w, "Only POST requests are allowed", http.StatusMethodNotAllowed)
			return
		}

		url := r.FormValue("url")
		if url == "" {
			http.Error(w, "URL is required", http.StatusBadRequest)
			return
		}

		shortURL := shortener.Shorten(url)
		fmt.Fprint(w, shortURL)
	})

	http.HandleFunc("/", shortener.Redirect)

	log.Fatal(http.ListenAndServe(":8080", nil))
}
