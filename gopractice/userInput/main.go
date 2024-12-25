package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	fmt.Print("Hey what  your name  : ")
	// var name string
	// fmt.Scan(&name)
	// fmt.Println("  Hello brother ", name)

	reader := bufio.NewReader(os.Stdin)
	name, _ := reader.ReadString('\n')
	fmt.Println("Hello, sir ", name)

}
