package main

import "fmt"

type Person struct {
	FirstName string
	LastName  string
	Age       int
}

type Contact struct {
	Email string
	Phone string
}

type Address struct {
	House   int
	Area    string
	State   string
	Country string
}

type Employee struct {
	Person_Details Person
	Person_Contact Contact
	Person_Address Address
}

func main() {
	var kio Person
	fmt.Println("Kio  Person : ", kio)
	fmt.Println("************** ---------------------- ****************")
	kio.FirstName = "kio"
	kio.LastName = "bantywithmoney group"
	kio.Age = 9999
	fmt.Println("Kio all details : ", kio)
	fmt.Println("*********** -------------------- **********")
	person1 := Person{
		FirstName: "mio",
		LastName:  "bantywithmoney group",
		Age:       99009,
	}
	fmt.Println("Person 1 details  : ", person1)
	fmt.Println(" ************** ----------------- ********************")
	var person2 = new(Person)
	person2.FirstName = "nio-kio"
	person2.LastName = "bantywithmoney group"
	person2.Age = 9090909
	fmt.Println("Person2 detail ", person2)
	fmt.Println("***************-------------------------********************")

	var employee1 Employee
	employee1.Person_Details = Person{
		FirstName: "lio",
		LastName:  "bantywithmoney group",
		Age:       9090909,
	}
	employee1.Person_Contact = Contact{
		Email: "lio-kio78@gmail.com",
		Phone: "90909877878",
	}
	employee1.Person_Address = Address{
		House:   9090,
		Area:    "iop",
		State:   "Maharashtra",
		Country: "India",
	}
	fmt.Println("Employee1 ONE all details bro : ", employee1)
	fmt.Println("****************** ------------------------------- *******************")

}
