package main

import (
	"fmt"
	"strings"
)

func main() {
	data := "apple, Orange, banana"
	parts := strings.Split(data, ",")
	fmt.Println(parts)
	str := "one two three four two two five "
	count := strings.Count(str, "two")
	fmt.Println("count : ", count)
}
