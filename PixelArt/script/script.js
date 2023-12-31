// - - - PIXEL ART - - -
        const board = document.querySelector("#board")
        const matrix = []
        const changeColor = document.querySelectorAll(".color")
        let color = '#ff0000'

        changeColor.forEach(colorBox => {
            colorBox.addEventListener('click', (e) => {
                if (colorBox.name == 'color') {
                    e.preventDefault()
                    console.log('cor default')
                }
                color = colorBox.value
                console.log(color)
            })
        })

        for (i = 1; i < 9; i++) {
            const column = []
            matrix.push(column)
            for (j = 1; j < 9; j++) {
                const pixel = document.createElement("div")
                pixel.dataset.row = i
                pixel.dataset.column = j
                pixel.classList = 'pixel'
                board.appendChild(pixel)
                column.push(pixel)
            }
        }

        const pixels = document.querySelectorAll(".pixel")
        pixels.forEach(pixel => {
            pixel.addEventListener('click', () => {
                let color2Change = color
                const row = pixel.dataset.row
                const clm = pixel.dataset.column

                const rgb2hex = (rgb) => rgb == '' || rgb == 'white' ? '#ffffff' : `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`

                if (rgb2hex(pixel.style.background) == color) {
                    color2Change = 'white'
                    pixel.style.background = 'white'
                } else {
                    pixel.style.background = color
                }

                const data = {
                    type: 'pixel',
                    content: {
                        color: color2Change,
                        y: row,
                        x: clm
                    }
                }

                socket.send(JSON.stringify(data))
            })
        })

        // - - - CHAT - - -
        const socket = new WebSocket("ws://localhost:8080/room")
        const input = document.querySelector("#text")
        const article = document.querySelector("article")
        
        socket.onopen = () => {
            socket.send("conexão websocket iniciada")
        }

        socket.onmessage = (e) => {
            const data = JSON.parse(e.data)
            
            if (data.type == "chat") {
                const p = document.createElement("p")
                p.innerText = data.content
                article.appendChild(p)
            } else {
                color2Change = data.content.color
                const x = Number(data.content.x)
                const y = Number(data.content.y)

                matrix[y-1][x-1].style.background = color2Change
            }
        }

        function enviar() {
            const data = {
                type: 'chat',
                content: input.value
            }
            socket.send(JSON.stringify(data))
            input.value = ""
        }
