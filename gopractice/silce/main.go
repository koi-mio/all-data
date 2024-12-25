package main

import "fmt"

func main() {
	numbers := []int{1, 2, 3, 4, 5}
	numbers = append(numbers, 12, 23, 43, 45, 90)
	fmt.Println("number is  : ", numbers)
	fmt.Printf("Number has data type  : %T\n ", numbers)
	fmt.Println("Lenght : ", len(numbers))

	fmt.Println(" ************* ------- ***************")

	number := make([]int, 3, 4)
	number = append(number, 23)
	fmt.Println("Slice is ", number)
	fmt.Println("Length is ", len(number))
	fmt.Println("Capacity is  ", cap(number))

}
