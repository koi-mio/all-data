package main

import "fmt"

func main() {

	studentGrades := make(map[string]int)
	studentGrades["mio"] = 90
	studentGrades["nio"] = 91
	studentGrades["kio"] = 92
	studentGrades["lio"] = 93

	fmt.Println("Marks of kio : ", studentGrades["kio"])
}

// func main() {
// 	var name string
// 	var math, computerScience, electronics, english float64
// 	fmt.Print("Enter the student's name: ")
// 	fmt.Scanln(&name)
// 	fmt.Println("\nEnter scores for each subject (out of 100)\n ")
// 	fmt.Print("Math: ")
// 	fmt.Scanln(&math)
// 	fmt.Print("Computer Science: ")
// 	fmt.Scanln(&computerScience)
// 	fmt.Print("English: ")
// 	fmt.Scanln(&english)
// 	fmt.Print("Electronics: ")
// 	fmt.Scanln(&electronics)
// 	totalScore := math + computerScience + english + electronics
// 	overallPercentage := (totalScore / 400) * 100 // 400 is the total possible score
// 	fmt.Println("\nResults for", name)
// 	fmt.Printf("Math: %.2f%%\n", math)
// 	fmt.Printf("Computer Science: %.2f%%\n", computerScience)
// 	fmt.Printf("English: %.2f%%\n", english)
// 	fmt.Printf("Electronics: %.2f%%\n", electronics)
// 	fmt.Printf("Overall Percentage: %.2f%%\n", overallPercentage)
// }
