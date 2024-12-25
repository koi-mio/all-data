package main

import "fmt"

func add(a, b int) int {
	return a + b
}

func main() {
	fmt.Println("Starting  of the programs  ")
	data := add(223, 232)
	defer fmt.Println("Data is : ", data)
	defer fmt.Println("middle of the programs")
	fmt.Println("End of the people")
}
