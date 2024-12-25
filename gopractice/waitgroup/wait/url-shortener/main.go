package main

import (
	"encoding/json"
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

type URLMapping struct {
	OriginalURL string
}

var urlStore = make(map[string]URLMapping)

const letterBytes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

func generateShortURL() string {
	rand.Seed(time.Now().UnixNano())
	b := make([]byte, 6)
	for i := range b {
		b[i] = letterBytes[rand.Intn(len(letterBytes))]
	}
	return string(b)
}

func shortenURLHandler(w http.ResponseWriter, r *http.Request) {
	var request struct {
		URL string `json:"url"`
	}
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	shortURL := generateShortURL()
	urlStore[shortURL] = URLMapping{OriginalURL: request.URL}

	response := map[string]string{"short_url": fmt.Sprintf("http://localhost:8080/%s", shortURL)}
	json.NewEncoder(w).Encode(response)
}

func redirectHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	shortURL := vars["shortURL"]
	if urlMapping, found := urlStore[shortURL]; found {
		http.Redirect(w, r, urlMapping.OriginalURL, http.StatusMovedPermanently)
	} else {
		http.Error(w, "URL not found", http.StatusNotFound)
	}
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/shorten", shortenURLHandler).Methods("POST")
	r.HandleFunc("/{shortURL}", redirectHandler).Methods("GET")
	log.Println("Starting server on :8080")
	log.Fatal(http.ListenAndServe(":8080", r))
}
