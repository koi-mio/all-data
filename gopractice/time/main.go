package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("kio time course")
	currentTime := time.Now()
	formattedTime := currentTime.Format("2006-01-02 Monday 15:04:05 PM")
	fmt.Println("Formattted time :- ", formattedTime)
	fmt.Println("***************_______________************")

	layout_str := "2006-01-02"
	dateStr := "2023-11-15"
	formatted_time, _ := time.Parse(layout_str, dateStr)
	fmt.Println("Formatted time  : ", formatted_time)
	fmt.Println("**************________________*************")

	new_date := currentTime.Add(24 * time.Hour)
	fmt.Println("new_date time : ", new_date)
	formatted_time_new_date := new_date.Format("2006/01/02 Monday 15:04:05 PM ")
	fmt.Println("the formatted time  := ", formatted_time_new_date)
	fmt.Println("*************____________________****************")

	now := time.Now()
	fmt.Println("Current Time:", now)
	fmt.Println("***********_____________***********")

}
