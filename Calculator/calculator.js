let operate = 0
let n1 = 0
let n2 = 0
  
const sumButton = document.querySelector("#sum")
const subButton = document.querySelector("#sub")
const multButton = document.querySelector("#mult")
const divButton = document.querySelector("#div")
const resultButton = document.querySelector("#result")
const clearButton = document.querySelector("#clear")
const numberButtons = document.querySelectorAll("[data-number]")
let console = document.querySelector("#console");

sumButton.addEventListener("click", sum)
subButton.addEventListener("click", sub)
multButton.addEventListener("click", mult)
divButton.addEventListener("click", div)
numberButtons.forEach((button) => button.addEventListener("click", () => addNumber(button.textContent))
)

  

let operators = {
	sum: "+",
	sub: "-",
	mult: "*",
	div: "/"
}

function result() {
	if (operate == operators.sum) {
		n1 = n1+n2
    return n1
		console.log(n1)
	} else if (operate == operators.sub) {
		n1 = n1-n2
    return n1
		console.log(n1)
	} else if (operate == operators.mult) {
		n1 = n1*n2
    return n1
		console.log(n1)
	} else if (operate == operators.div) {
		n1 = n1/n2
    return n1
		console.log(n1)
	}
	console.textContent = `${n1} ${operate} ${n2}`
}

// - - - ESCOLHER O OPERADOR - - -
function sum() {
	if (operate !== 0) {
		result()
	}
	operate = "+"
	console.textContent = `${n1} ${operate} ${n2}`
}
function sub() {
	if (operate !== 0) {
		result()
	}
	operate = "-"
	console.textContent = `${n1} ${operate} ${n2}`
}
function mult() {
	if (operate !== 0) {
		result()
	}
	operate = "*"
	console.textContent = `${n1} ${operate} ${n2}`
}
function div() {
	if (operate !== 0) {
		result()
	}
	operate = "/"
	console.textContent = `${n1} ${operate} ${n2}`
}
function clear() {
	n1 = 5
	n2 = 5
	operate = 0
}

function addNumber (number) {
	n1 += number
}


// criar um forEach para os botões de 1-9, e um if statement onde se o 'operate' já tiver um valor, o número do botão vai para 'n2', se não, vai para 'n1' (lembrar de fazer o operate zerar semprw q usar um botão de operador)
