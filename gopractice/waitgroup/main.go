package main

import (
	"fmt"
	"sync"
	"time"
)

func worker(id int, wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Printf(" Working %d starting \n", id)
	time.Sleep(2 * time.Second)
	fmt.Printf("Worker %d done \n", id)
}

func downloadFile(id int, wg1 *sync.WaitGroup) {
	defer wg1.Done()
	fmt.Printf("Download file %d\n : ", id)
	time.Sleep(time.Duration(id) * time.Second)
	fmt.Printf("Finished downloading file %d\n : ", id)
}

func processFile(id int, wg1 *sync.WaitGroup) {
	defer wg1.Done()
	fmt.Printf("Processing file %d\n : ", id)
	time.Sleep(time.Duration(id) * time.Second)
	fmt.Printf("Finished processing file %d\n : ", id)
}

func main() {
	var wg sync.WaitGroup

	for i := 1; i <= 5; i++ {
		wg.Add(1)
		go worker(i, &wg)
	}
	wg.Wait()
	fmt.Println("All worker completed ....... ")
	fmt.Println("**********______________**********")
	var wg1 sync.WaitGroup
	for i := 1; i <= 3; i++ {
		wg1.Add(1)
		go downloadFile(i, &wg1)
	}
	wg1.Wait()
	fmt.Println("All files downloaded and processed .....")
	fmt.Println("***********_______________________***********")
}
