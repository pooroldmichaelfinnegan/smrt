package main

import (
	"fmt"
	"os"
)

func main2() {
	// var egg string = "eggs"
	file, err := os.ReadFile("./files/txt.txt")

	fmt.Println(file)
	fmt.Println(err)
}
