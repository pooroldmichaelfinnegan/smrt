package main

import (
	"fmt"
	"os"
)

func myRead(path string) {
	// var egg string = "eggs"
	file, err := os.ReadFile(path)

	fmt.Println(file)
	fmt.Printf("%s\n", file)

	fmt.Println(err)

	// for by int = file
	var length int = len(file)
	fmt.Println(length)

	var arr []byte

	for i := 0; i < len(file); i++ {
		arr = append(arr, file[i]+1)
	}
	fmt.Printf("%s\n", arr)

	// os.WriteFile(FYU!)
}
