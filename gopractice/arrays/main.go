package main

import "fmt"

func main() {
	fmt.Println("kio ...........")
	var name [6]string
	name[0] = "loio"
	name[1] = "kio"
	name[2] = "mio"
	fmt.Println("Name of Person is : ", name)
	var number = [5]int{1, 2, 3, 4, 5}
	fmt.Println("Number is : ", number)
	fmt.Println("Length of number is : ", len(number))
	fmt.Println("The name is 2  : ", name[2])

	var price [5]int
	fmt.Println("Price is  : ", price)
}
