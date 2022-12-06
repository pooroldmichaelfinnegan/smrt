package main

import (
	"fmt"
	"os"
)

func main() {
	// var egg string = "eggs"
	file, error := os.ReadFile("./files/txt.txt")

	fmt.Println(file)
}
