package main

import (
	"fmt"
	"net/http"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r * http.Request) bool {
		return true
	},
}

var clients []websocket.Conn

func handleSocket(w http.ResponseWriter, r *http.Request) {
	socket, _ := upgrader.Upgrade(w, r, nil)
	defer socket.Close()

	clients = append(clients, *socket)

	for {
		messageType, p, err := socket.ReadMessage()
		if err != nil {
			fmt.Print(err)
			return
		}
		for _, client := range clients {
			err = client.WriteMessage(messageType, p)
		}
	}
}

func main() {
	http.HandleFunc("/room", handleSocket)
	
	http.Handle("/", http.FileServer(http.Dir(".")))

	fmt.Println("servidor tá rodando")
	server := http.ListenAndServe(":8080", nil)
	if server != nil {
		fmt.Println("erro no servidor")
	}
}
