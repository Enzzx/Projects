let operate
let n1 = " "
let n2 = " "

// - - SELECIONANDO ELEMENTOS - -
const sumButton = document.querySelector("#sum")
const subButton = document.querySelector("#sub")
const multButton = document.querySelector("#mult")
const divButton = document.querySelector("#div")
const resultButton = document.querySelector("#result")
const clearButton = document.querySelector("#clear")
const numberButtons = document.querySelectorAll("[data-number]")
let console = document.querySelector("#console");

// - - - EVENTOS - - -
clearButton.addEventListener("click", clear)
resultButton.addEventListener("click", result)
sumButton.addEventListener("click", sum)
subButton.addEventListener("click", sub)
multButton.addEventListener("click", mult)
divButton.addEventListener("click", div)
numberButtons.forEach((button) => button.addEventListener("click", () => addNumber(button.textContent))
)

  
// - - - RESULTADO - - -
let operators = {
	sum: "+",
	sub: "-",
	mult: "*",
	div: "/"
}

function result() {
	if (operate == operators.sum) {
		n1 = Number(n1) + Number(n2)
	} else if (operate == operators.sub) {
		n1 = Number(n1) - Number(n2)
	} else if (operate == operators.mult) {
		n1 = Number(n1) * Number(n2)
	} else if (operate == operators.div) {
		n1 = Number(n1) / Number(n2)
	}
	operate = undefined
	n2 = 0
	console.textContent = `${n1}`
	display()
}

// - - - ESCOLHER O OPERADOR - - -
function sum() {
	if (operate !== undefined) {
		result()
	}
	operate = "+"
	console.textContent = `${n1} ${operate}`
	display()
}
function sub() {
	if (operate !== undefined) {
		result()
	}
	operate = "-"
	console.textContent = `${n1} ${operate}`
	display()
}
function mult() {
	if (operate !== undefined) {
		result()
	}
	operate = "*"
	console.textContent = `${n1} ${operate}`
	display()
}
function div() {
	if (operate !== undefined) {
		result()
	}
	operate = "/"
	console.textContent = `${n1} ${operate}`
	display()
}
function clear() {
	operate = undefined
	n1 = " "
	n2 = " "
	display()
	console.textContent = `${n1}`
}

function addNumber (number) {
	if (operate == undefined) {
  	n1 += number
    console.textContent = `${n1}`
  } else {
		n2 += number
    console.textContent = `${n1} ${operate} ${n2}`
	}
}

// - - - DISPLAY - - -
function display() {
	if (n1 === 0) {
		n1 = " "
	}
	if (n2 === 0) {
		n2 = " "
	}
}
