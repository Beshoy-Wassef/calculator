console.log("Hello World")


function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

let leftOp = [""];
let rightOp = ["Start"];
let oPP = [];
let currentVar = leftOp;  //created a shallow copy of leftOp for operation


function operate(num1, num2, opp){
    if (opp == "+"){
        return add(Number(num1), Number(num2))//need the Number() because "" can concat
    } else if(opp == "-"){
        return subtract(num1, num2)
    } else if (opp == "*") {
        return multiply(num1, num2)
    } else if (opp == "/") {
        return divide(num1, num2)
    }


}

const display = document.querySelector('#display')
display.textContent = "";



//select all buttons for event listeners and operations
const buttonZero = document.querySelector(".zero")
const buttonOne = document.querySelector(".one")
const buttonTwo = document.querySelector(".two")
const buttonThree = document.querySelector(".three")
const buttonFour = document.querySelector(".four")
const buttonFive = document.querySelector(".five")
const buttonSix = document.querySelector(".six")
const buttonSeven = document.querySelector(".seven")
const buttonEight = document.querySelector(".eight")
const buttonNine = document.querySelector(".nine")
const buttonPlus = document.querySelector(".plus")
const buttonSubtract = document.querySelector(".subtract")
const buttonMultiply = document.querySelector(".multiply")
const buttonDivide = document.querySelector(".divide")
const buttonEqual = document.querySelector(".equal")
const buttonClear = document.querySelector(".clear")
const buttonDot = document.querySelector(".dot")
const buttonBack = document.querySelector(".backspace")

//event listeners for all buttons to store value in variable and also update display
//currentVar currently equal to leftOp
buttonClear.addEventListener("click", function() {
    display.textContent = ""
    leftOp[0] = ""
    rightOp[0] = "Start"
    oPP = []
    currentVar = leftOp
})

buttonBack.addEventListener("click", function (){
      if (currentVar == "Equal" && leftOp.length > 0) {
        leftOp[0] = leftOp[0].toString().slice(0, leftOp[0].length - 1)
        currentVar = leftOp
        display.textContent = `${leftOp}`
    } else if (currentVar == leftOp && leftOp.length > 0) {
         leftOp[0] = leftOp[0].toString().slice(0, leftOp[0].length - 1)
        display.textContent = `${leftOp} ${oPP}`

    } else if (currentVar == rightOp && rightOp.length > 0 ){
        rightOp[0] = rightOp[0].toString().slice(0, rightOp[0].length - 1)
        display.textContent = `${leftOp[0]} ${oPP[0]} ${rightOp[0]}`

    } 
     
})

buttonDot.addEventListener("click", function (){
    if (currentVar == "Equal" && !leftOp[0].toString().includes(".")) {
        leftOp[0] += "."
        currentVar = leftOp
        display.textContent = `${leftOp}`
    } else if (currentVar == leftOp && !leftOp[0].includes(".")) {
        leftOp[0] += "."
        display.textContent = `${leftOp}`

    } else if (currentVar == rightOp && !rightOp[0].includes(".")){
        rightOp[0] += "."
        display.textContent = `${rightOp}`

    } 
     
      
})

buttonZero.addEventListener("click", function() {
    if (currentVar[0] == rightOp[0]){
        rightOp[0] += "0"
        display.textContent = `${leftOp[0]} ${oPP[0]} ${rightOp[0]}`

        currentVar = rightOp


    } else if (currentVar == "Equal"){
        leftOp[0] = "0"
        currentVar = leftOp
        display.textContent = `${leftOp[0]}`

    } else {
    leftOp[0] += "0"
    display.textContent = `${leftOp[0]}`
    }
      
  

})

buttonOne.addEventListener("click", function() {
    if (currentVar[0] == rightOp[0]){
        rightOp[0] += "1"
                
        display.textContent = `${leftOp[0]} ${oPP[0]} ${rightOp[0]}`
        currentVar = rightOp
    } else if (currentVar == "Equal"){
        leftOp[0] = "1"
        currentVar = leftOp
        display.textContent = `${leftOp[0]}`

    } else {
    leftOp[0] += "1"
    display.textContent = `${leftOp[0]}`
    }
     

})

buttonTwo.addEventListener("click", function() {

      if (currentVar[0] == rightOp[0]){
        rightOp[0] += "2"
                
        display.textContent = `${leftOp[0]} ${oPP[0]} ${rightOp[0]}`
        currentVar = rightOp
    }  else if (currentVar == "Equal"){
        leftOp[0] = "2"
        currentVar = leftOp
        display.textContent = `${leftOp[0]}`

    } else {
    leftOp[0] += "2"
    display.textContent = `${leftOp[0]}`
    }
    

})

buttonThree.addEventListener("click", function() {

  if (currentVar[0] == rightOp[0]){
        rightOp[0] += "3"
                
        display.textContent = `${leftOp[0]} ${oPP[0]} ${rightOp[0]}`
        currentVar = rightOp
  }  else if (currentVar == "Equal"){
        leftOp[0] = "3"
        currentVar = leftOp
        display.textContent = `${leftOp[0]}`

    } else {
    leftOp[0] += "3"
    display.textContent = `${leftOp[0]}`
  }
})

buttonFour.addEventListener("click", function() {

  if (currentVar[0] == rightOp[0]){
        rightOp[0] += "4"
                
        display.textContent = `${leftOp[0]} ${oPP[0]} ${rightOp[0]}`
        currentVar = rightOp
    }  else if (currentVar == "Equal"){
        leftOp[0] = "4"
        currentVar = leftOp
        display.textContent = `${leftOp[0]}`

    } else {
        leftOp[0] += "4"
        display.textContent = `${leftOp[0]}`
    }
})

buttonFive.addEventListener("click", function() {

  if (currentVar[0] == rightOp[0]){
        rightOp[0] += "5"
                
        display.textContent = `${leftOp[0]} ${oPP[0]} ${rightOp[0]}`
        currentVar = rightOp
    }  else if (currentVar == "Equal"){
        leftOp[0] = "5"
        currentVar = leftOp
        display.textContent = `${leftOp[0]}`

    } else {

        leftOp[0] += "5"
        display.textContent = `${leftOp[0]}`
    }
})

buttonSix.addEventListener("click", function() {

  if (currentVar[0] == rightOp[0]){
        rightOp[0] += "6"
                
        display.textContent = `${leftOp[0]} ${oPP[0]} ${rightOp[0]}`
        currentVar = rightOp
    }  else if (currentVar == "Equal"){
        leftOp[0] = "6"
        currentVar = leftOp
        display.textContent = `${leftOp[0]}`

    } else {
    leftOp[0] += "6"
    display.textContent = `${leftOp[0]}`
    }
})

buttonSeven.addEventListener("click", function() {

  if (currentVar[0] == rightOp[0]){
        rightOp[0] += "7"
                
        display.textContent = `${leftOp[0]} ${oPP[0]} ${rightOp[0]}`
        currentVar = rightOp
    }  else if (currentVar == "Equal"){
        leftOp[0] = "7"
        currentVar = leftOp
        display.textContent = `${leftOp[0]}`

    } else {
    leftOp[0] += "7"
    display.textContent = `${leftOp[0]}`
    }
})

buttonEight.addEventListener("click", function() {

  if (currentVar[0] == rightOp[0]){
        rightOp[0] += "8"
                
       display.textContent = `${leftOp[0]} ${oPP[0]} ${rightOp[0]}`
        currentVar = rightOp
        
      }  else if (currentVar == "Equal"){
        leftOp[0] = "8"
        currentVar = leftOp
        display.textContent = `${leftOp[0]}`

    } else {

    leftOp[0] += "8"
    display.textContent = `${leftOp[0]}`
      }
})

buttonNine.addEventListener("click", function() {

  if (currentVar[0] == rightOp[0]){
        rightOp[0] += "9"
                
        display.textContent = `${leftOp[0]} ${oPP[0]} ${rightOp[0]}`
        currentVar = rightOp
      }  else if (currentVar == "Equal"){
        leftOp[0] = "9"
        currentVar = leftOp
        display.textContent = `${leftOp[0]}`

    } else {

    leftOp[0] += "9"
    display.textContent = `${leftOp[0]}`
    }
})

//buttons for operators --> need to change currentVar twice 
buttonPlus.addEventListener("click", function(){
    oPP[0] = "+"
    rightOp[0] = ""
    currentVar = rightOp
    display.textContent = `${leftOp[0]} ${oPP[0]}`
  
})

buttonSubtract.addEventListener("click", function () {
    oPP[0] = "-"
    rightOp[0] = ""
    currentVar = rightOp
    display.textContent = `${leftOp[0]} ${oPP[0]}`

})

buttonMultiply.addEventListener("click", function () {
    oPP[0] = "*"
    rightOp[0] = ""
    currentVar = rightOp
    display.textContent = `${leftOp[0]} ${oPP[0]}`

})

buttonDivide.addEventListener("click", function () {
    oPP[0] = "/"
    rightOp[0] = ""
    currentVar = rightOp
    display.textContent = `${leftOp[0]} ${oPP[0]}`

})



buttonEqual.addEventListener("click", function (){
   
    leftOp[0] = operate(leftOp[0], rightOp[0], oPP[0])
    //if leftOp is Infinity --> need to display an error message
    if (leftOp[0] == "Infinity"){
        display.textContent = "Error!"
        leftOp[0] = ""
        rightOp[0] = "Start"
        currentVar = leftOp
    } else {
    display.textContent = `${leftOp[0]}`
    currentVar = "Equal"
    
    }
})

//Storing User input
//What defines a session?
    //based on operator click
    //we need a current variable to operate on that changes based on operator clicks

//Algorithim for display
//After the user clicks on a number(s), then an operator, then a number(s), then either the '=' or another operator
//the operate function will perform the calculation and update the leftOp, with the session for leftOp to only continue if another operator
//is clicked, if a number is clicked, leftOp will change to the number and new session will commence

//display
//Initial blank screen
//Every time the user clicks on a button, display should be automatically updated --> I think this has to be event listener on display


