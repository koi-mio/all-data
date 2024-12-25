package main

import (
	"fmt"
	"sync"
	"time"
)

func packe() {
	fmt.Println(" The packeage func documantation ..")
}

type Counter struct {
	mu    sync.Mutex
	value int
}

func (c *Counter) Increment() {
	c.mu.Lock()
	defer c.mu.Unlock()
	c.value++
}

func printNumber() {
	for i := 1; i <= 5; i++ {
		fmt.Println(i)
		time.Sleep(1 * time.Second)
	}
}

func printno(wg *sync.WaitGroup) {
	defer wg.Done()
	for i := 1; i <= 5; i++ {
		fmt.Println(i)
		time.Sleep(1 * time.Second)
	}
}

func printkoi(ch chan int) {
	for i := 1; i <= 5; i++ {
		ch <- i
		time.Sleep(1 * time.Second)
	}
	close(ch)
}

func sayHello() {
	time.Sleep(1000 * time.Millisecond)
	fmt.Println("hello SayHello hello world...... ")
}

func sayHi() {
	fmt.Println(" kio mio")
}

func main() {
	packe()
	sayHello()
	sayHi()

	fmt.Println("______________________**************************________")

	go printNumber()
	for i := 'a'; i <= 'e'; i++ {
		fmt.Printf("%c\n", i)
		time.Sleep(1 * time.Second)
	}
	time.Sleep(6 * time.Second)

	fmt.Println("*****************__________________________********")
	var wg sync.WaitGroup
	wg.Add(1)
	go printno(&wg)
	wg.Wait()
	fmt.Println("All goroutines complete ..... ")
	fmt.Println("*************----------------------************")
	ch := make(chan int)
	go printkoi(ch)
	for num := range ch {
		fmt.Println(num)
	}
	fmt.Println("All number recieved ")
	fmt.Println("********____________************")
	c := Counter{}
	for i := 0; i < 5; i++ {
		go func() {
			for j := 0; j < 1000; j++ {
				c.Increment()
			}
		}()
	}
	time.Sleep(1 * time.Second)
	fmt.Println("Final counter value  : ", c.value)
	fmt.Println("******************__________________*************")
}
