package main

import "fmt"

func simpleFunction() {
	fmt.Println("simple function .......... ")
}

func add(a, b int) int {
	return a * b
}

func main() {
	fmt.Println(" We are function practice buddy in golang  ")
	simpleFunction()
	ans := add(87899, 89898934)
	fmt.Println("Add of two number is : ", ans)
}
