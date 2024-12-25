package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	fmt.Println("Learning web service bro ........")
	res, err := http.Get("https://jsonplaceholder.typicode.com/todos/1")
	if err != nil {
		fmt.Println("Error getting Get response error . ", err)
		return
	}
	defer res.Body.Close()
	fmt.Printf("Type of request : %T\n ", res)
	data, err := ioutil.ReadAll(res.Body)
	if err != nil {
		fmt.Println("error reading response ", err)
		return
	}
	fmt.Println("first response ", len(data))
	fmt.Println("REsponcse", string(data))
}
