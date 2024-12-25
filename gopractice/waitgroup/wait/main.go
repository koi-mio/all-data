package main

import (
	"fmt"
	"sync"
)

func worker(i int, wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Printf("Worker %d started \n", i)
	fmt.Printf("worker is %d ended  \n", i)
}

func main() {
	fmt.Println(" kio ..........")
	var wg sync.WaitGroup
	for i := 1; i <= 5; i++ {
		wg.Add(1)
		go worker(i, &wg)
	}
	wg.Wait()
	fmt.Println("workers task complete .... ")
	fmt.Println("**************_______________**************")
}
