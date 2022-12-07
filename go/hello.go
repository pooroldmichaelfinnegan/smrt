package main

import "fmt"

func main() {
	var a string = "hello"
	b := "world"
	fmt.Println(a + b)

	eoe := [3]string{
		"eggs", "over", "easy",
	}

	eggs := make([]string, 1)
	eggs = eoe[:1]
	var egg string = eoe[0]

	fmt.Println(eggs)
	fmt.Println(egg)
}
