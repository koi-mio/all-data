package main

import "fmt"

func main() {
	for i := 0; i < 10; i++ {
		fmt.Println(" Number is : ", i)
	}

	numbers := []int{11, 42, 83, 14, 75}
	for index, value := range numbers {
		fmt.Println("Index of NUmbers is %d, and value is %d\n ", index, value)
	}

	data := "hello world"
	for index, char := range data {
		fmt.Printf("Index of Data is %d and value is %c\n", index, char)
	}
}
