package main

import "fmt"

func modifyValueByReference(num *int) {
	*num = *num * 2
}

func main() {
	fmt.Println("Pointer file ....... ")

	// var num int
	// num = 909
	// var ptr *int
	// ptr = &num
	// fmt.Println("NUmb has value : ", num)
	// fmt.Println("The pointer contains : ", ptr)

	num := "kio"
	ptr := &num
	fmt.Println("Pointer contains : ", ptr)
	fmt.Println("Data contains through Pointer : ", *ptr)

	var pointer *int
	if pointer == nil {
		fmt.Println("Pointer is not assinged  ")
	}
	value := 10
	modifyValueByReference(&value)
	fmt.Println("value contains : ", value)
}
