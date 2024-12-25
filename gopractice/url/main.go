package main

import (
	"fmt"
	"net/url"
)

func main() {
	fmt.Println("Learning url in golang .....")
	rawURL := "https://www.example.com:8080/path?query=golang&lang=en#fragment"
	parsedURL, err := url.Parse(rawURL)
	if err != nil {
		fmt.Println("error parseing url ", err)
		return
	}
	fmt.Println("Schema : ", parsedURL.Scheme)
	fmt.Println("Host  : ", parsedURL.Host)
	fmt.Println("RawQuriy : ", parsedURL.RawQuery)
	fmt.Println("Paht : ", parsedURL.Path)
	fmt.Println("Fragment : ", parsedURL.Fragment)

	fmt.Println("*****************____________***************")

	nio := "https://www.example.com/path"
	parsedURL1, err := url.Parse(nio)
	if err != nil {
		fmt.Println("Error parsing url : ", err)
		return
	}
	parsedURL1.Scheme = "http"
	parsedURL1.Host = "golang.org"
	parsedURL1.Path = "/doc"

	queryParams := url.Values{}
	queryParams.Add("q", "net/url package")
	parsedURL1.RawQuery = queryParams.Encode()
	fmt.Println("modified url : ", parsedURL1.String())

	fmt.Println("***********-------------------------*************")

	queryParams1 := url.Values{}
	queryParams1.Add("q", "golang")
	queryParams1.Add("lang", "en")

	fmt.Println("Encoded query : ", queryParams1.Encode())

	fmt.Println("************-----------*******")

	rawURL12 := "https://www.example.com/search?q=golang&lang=en"
	parsedURL12, _ := url.Parse(rawURL12)
	queryParams12 := parsedURL12.Query()
	fmt.Println("q:", queryParams12.Get("q"))
	fmt.Println("lang:", queryParams12.Get("lang"))

	fmt.Println("8****************--------------*************")
	u := &url.URL{
		Scheme: "https",
		Host:   "www.example.com",
		Path:   "/search",
	}

	queryParams123 := url.Values{}
	queryParams123.Add("q", "golang")
	queryParams123.Add("lang", "en")
	u.RawQuery = queryParams123.Encode()

	fmt.Println("Built URL:", u.String())
}
