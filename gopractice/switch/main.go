package main

import "fmt"

func main() {

	var day int
	fmt.Print("Enter the day of the week (1-7): ")
	fmt.Scanln(&day)

	switch day {
	case 1:
		fmt.Println("monday.......")
	case 2:
		fmt.Println("thuseday.......")
	case 3:
		fmt.Println("wedsenday........")
	case 4:
		fmt.Println("Thuseday........")
	case 5:
		fmt.Println("Friday.......")
	case 6:
		fmt.Println("Saturday......")
	default:
		fmt.Println("Sunday ................... ")
	}

	fmt.Println(" The month entires ")

	var month int
	fmt.Println("Enter the month number 1 to 12 : ")
	fmt.Scanln(&month)

	switch month {
	case 1:
		fmt.Println(" Janvary ")
	case 2:
		fmt.Println(" Februvary ")
	case 3:
		fmt.Println(" March ")
	case 4:
		fmt.Println(" April ")
	case 5:
		fmt.Println(" may ")
	case 6:
		fmt.Println(" June ")
	case 7:
		fmt.Println(" JUly ")
	case 8:
		fmt.Println(" Augest ")
	case 9:
		fmt.Println("Septembar ")
	case 10:
		fmt.Println(" Ocumber ")
	case 11:
		fmt.Println(" Novembar ")
	case 12:
		fmt.Println(" Decembar ")
	}
}
