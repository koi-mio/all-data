package main

import (
	"fmt"
	"io/ioutil"
)

func main() {

	// file, err := os.Create("example01.txt")
	// if err != nil {
	// 	fmt.Println("Error while creating file : ", err)
	// 	return
	// }
	// defer file.Close()
	// content := "hello world file is created bro golang is very good   and  golang expert bantywithmoney"
	// _, errors := io.WriteString(file, content+"\n")
	// if errors != nil {
	// 	fmt.Println("Error while writing files  : ", errors)
	// 	return
	// }
	// fmt.Println("Successfully create file it ......")

	// file, err := os.Open("example01.txt")
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
	// 		fmt.Println("Error while reading file ...", err)
	// 		return
	// 	}
	// 	fmt.Println(string(buffer[:n]))
	// }

	content, err := ioutil.ReadFile("example01.txt")
	if err != nil {
		fmt.Println("Error while reading file ", err)
		return
	}
	fmt.Println(string(content))
}
