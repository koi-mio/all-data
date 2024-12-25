package main

import "fmt"

func divide(a, b int) int {
	return a / b
}

func floting(c, d float64) (float64, error) {
	if d == 0 {
		return 0, fmt.Errorf("Denominator must not be zero ")
	}
	return c / d, nil
}

func main() {
	fmt.Println("Started error handling in the functions  ")
	ans := divide(898998943565464, 9999999999900)
	fmt.Println(" The divide ANser is this ", ans)
	asd, err := floting(89.34, 87.99)
	if err != nil {
		fmt.Println("Error handling ........ ")
	}
	fmt.Println(" The divide asd is this ", asd)
}
