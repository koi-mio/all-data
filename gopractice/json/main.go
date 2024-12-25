package main

import (
	"encoding/json"
	"fmt"
)

type Address struct {
	Street string `json:"street"`
	City   string `json:"city"`
	Zip    string `json:"zip"`
}

type User struct {
	Name    string  `json:"name"`
	Age     int     `json:"age"`
	Email   string  `json:"email"`
	Address Address `json:"address"`
}

func main() {
	fmt.Println("Websocket ........................")
	user := User{
		Name:  "Alice ",
		Age:   9098,
		Email: "Alicew3e2@gmail.com",
	}
	jsonData, err := json.Marshal(user)
	if err != nil {
		fmt.Println("Error marshalling JSON : ", err)
		return
	}
	fmt.Println("JSOn: ", string(jsonData))
	fmt.Println("**************___________************")
	jsonData0 := `{"name":"Alice","age":30,"email":"alice@example.com"}`
	var user1 User

	errr := json.Unmarshal([]byte(jsonData0), &user1)
	if err != nil {
		fmt.Println("Error unmarshalling  JSON  : ", errr)
		return
	}
	fmt.Println("User:", user)
	fmt.Println("Name:", user.Name)
	fmt.Println("Age:", user.Age)
	fmt.Println("Email:", user.Email)
	fmt.Println("*************_______________________***************")
	josn12 := `{
        "name": "Alice",
        "age": 30,
        "email": "alice@example.com",
        "address": {
            "street": "123 Main St",
            "city": "Wonderland",
            "zip": "12345"
        }
    }`

	var kio User

	err0 := json.Unmarshal([]byte(josn12), &kio)
	if err0 != nil {
		fmt.Println("Error unmarshalling json ", err0)
		return
	}
	fmt.Println("User:", kio)
	fmt.Println("Street:", kio.Address.Street)
	fmt.Println("City:", kio.Address.City)
	fmt.Println("Zip:", kio.Address.Zip)

	fmt.Println("**************_____________***************")

	mio := `[
        {"name":"Alice","age":30,"email":"alice@example.com"},
        {"name":"Bob","age":25,"email":"bob@example.com"}
    ]`

	var nio []User

	err1 := json.Unmarshal([]byte(mio), &nio)
	if err1 != nil {
		fmt.Println("Error unMarshalling json : ", err1)
		return
	}
	for _, lio := range nio {
		fmt.Println("Usser ", lio)
	}
	fmt.Println("***************____________________************")
	nio23 := User{
		Name: "Alice",
	}

	jsonData231, err45 := json.Marshal(nio23)
	if err45 != nil {
		fmt.Println("Error marshalling JSON:", err45)
		return
	}

	fmt.Println("JSON:", string(jsonData231))
}
