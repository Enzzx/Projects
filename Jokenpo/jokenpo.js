let me = 0
let npc = 0

let myN = document.querySelector(".my_n")
let npcN = document.querySelector(".npc_n")

const leftImg = document.querySelector("#img-left")
const rightImg = document.querySelector("#img-right")
let yourChoice
const jokenpo = ["rock", "scissor", "paper"]

const buttons = document.querySelector(".jokenpo")
buttons.addEventListener("click", buttonCheck)

// - - - SELECIONAR BOTÃO - - -
function buttonCheck (event) {
	if (event.target.matches("#rock")) {
		yourChoice = "rock"
	} else if (event.target.matches("#paper")) {
		yourChoice = "paper"
	} else if (event.target.matches("#scissor")) {
		yourChoice = "scissor"
	}
	play(yourChoice)
}

// - - - MELHOR DE - - -
let selectMdx = document.querySelector("#mdv")
let mdx = selectMdx.options[selectMdx.selectedIndex].value
console.log(mdx)
selectMdx.addEventListener("change", updateMdv)

function updateMdv () {
	mdx = selectMdx.options[selectMdx.selectedIndex].value
console.log(`melhor de ${mdx}`)
	me = 0
	npc = 0
}

function play (yourChoice) {

  function getComputerChoice () {
	  let n_random = Math.floor(Math.random()*jokenpo.length)
	  let computerChoice = jokenpo[n_random]
	  return computerChoice
  }

  function getPlayerChoice (yourChoice) {
	  let playerChoice = yourChoice.toLowerCase()
	  return playerChoice
  }
    
    switch (getPlayerChoice(yourChoice) + " " + getComputerChoice()) {
  	  // - - -  CASO EMPATE - - -
	    case "rock rock":
      case "scissor scissor":
      case "paper paper":
        console.log("empate")
  	    break;
    	// - - -  CASO GANHE - - -
      case "rock scissor":
      case "scissor paper":
      case "paper rock":
      	me++
      	greenSwitch()
    	  if (me == mdx) {
    	  	me = 0
    	  	npc = 0
    	  	console.log("campeão")
    	  	alert("campeão")
      	} else {
    	  	console.log("você ganhou")
      	}
      	break;
      // - - -  CASO PERCA - - -
      case "scissor rock":
      case "paper scissor":
      case "rock paper":
      	redSwitch()
      	npc++
      	if (npc == mdx) {
    	  	me = 0
    	  	npc = 0
    	  	console.log("Fzada")
    	  	alert("Fzada")
      	} else {
        	console.log("você perdeu")
      	}
      	break;
      default:
      console.log(getPlayerChoice() + " " + getComputerChoice())
    }
    
    // - - - COR DE RESPOSTA - - -
    function greenSwitch () {
    	leftImg.style.backgroundColor='green'
    	setTimeout(backToGrey, 500)
    }
    function redSwitch () {
    	rightImg.style.backgroundColor='red'
      setTimeout(backToGrey, 500)
    }
    function backToGrey () {
    	leftImg.style.backgroundColor='#666666'
    	rightImg.style.backgroundColor='#666666'
    }
    
    myN.textContent = me
    npcN.textContent = npc
}
