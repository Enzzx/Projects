package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir(".")))

	server := http.ListenAndServe(":8080", nil)
	if server != nil {
		fmt.Println("erro no servidor")
	}
}