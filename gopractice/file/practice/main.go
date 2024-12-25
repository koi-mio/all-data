package main

import (
	"fmt"
	"io/ioutil"
)

func main() {
	// file, err := os.Create("thinking.txt")
	// if err != nil {
	// 	fmt.Println("Error while creating file : ", err)
	// 	return
	// }
	// defer file.Close()
	// content := "hello world by kio"
	// byte, errors := io.WriteString(file, content+"\n")
	// fmt.Println("byte written  : ", byte)
	// if errors != nil {
	// 	fmt.Println("Error while writing file : ", errors)
	// 	return
	// }
	// fmt.Println("Successfully created files ")

	// file, err := os.Open("thinking.txt")
	// if err != nil {
	// 	fmt.Println("Error while opening file : ", err)
	// 	return
	// }
	// defer file.Close()
	// buffer := make([]byte, 1024)
	// for {
	// 	n, err := file.Read(buffer)
	// 	if err == io.EOF {
	// 		break
	// 	}
	// 	if err != nil {
	// 		fmt.Println("Error while reading file ........", err)
	// 	}
	// 	fmt.Println(string(buffer[:n]))
	// }

	content , err := ioutil.ReadFile("thinking.txt")
	if err != nil{
		fmt.Println("Error while reading file ", err)
		return
	}
	fmt.Println(string(content))
}
