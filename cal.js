const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-op]');
const allClearBtn = document.querySelector('[data-ac]');
const deleteBtn = document.querySelector('[data-del]');
const equalBtn = document.querySelector('[data-equal]');
const upperTxt= document.querySelector('[data-upper]');
const lowerTxt= document.querySelector('[data-lower]');

class Calculator {
    constructor(upperTxt, lowerTxt) { //place them here so later can determine where to place the display text//
        this.upperTxt = upperTxt //to set variables that are going to be used below//
        this.lowerTxt = lowerTxt
        this.clear() //run this function as soon as a new cal is created to set things to default//
}

clear() { //to set all variables equal to nothing//
    this.upper = '' 
    this.lower = ''
    this.operation = undefined
}

delete() {
    this.lower = this.lower.toString().slice(0, -1)
}

appendNumber(number) {
    if (number === '.' && this.lower.includes('.')) return //to prevent consecutive '.'//
    this.lower = this.lower.toString() + number.toString() 
    //convert numbers to string so that numbers can show up at the end instead of adding them tgt//
}

chooseOperation(operation) {
    if (this.lower === '') return //when lower row is empty, do not execute below procedures//
    if (this.upper !== '') { //if there's a value on the upper row,//
        this.compute()       //allow operation buttons to be clicked & compute//
    }
    this.operation = operation
    this.upper = this.lower //whenever operation button is clicked, move the value to upper row//
    this.lower = '' //when the value is moved to the upper row, clear the lower row//
}

compute () {
    let computation
    const upper = parseFloat(this.upper)
    const lower = parseFloat(this.lower) //convert string to number//
    if (isNaN(upper) || isNaN(lower)) return //prevent the below code from running if none of the value is a number//
    switch (this.operation) {
        case "+":
            computation = upper + lower
            break;
        case "-":
            computation = upper - lower
            break;
        case "*":
            computation = upper * lower
            break;
        case "÷":
            computation = upper / lower
            break;
        default:
        return
    }
    this.lower = computation //what will happen after computation is done//
    this.operation = undefined
    this.upper = ''
}

updateDisplay() {
    this.lowerTxt.innerText = this.lower
    if (this.operation != null) { //whenever an operation button is clicked,//
        this.upperTxt.innerText =
          `${(this.upper)} ${this.operation}` //attach it to the value and display it on the upper row//
      } else { //if there's no operation button being clicked, i.e. clicking equal, upper row will be cleared//
        this.upperTxt.innerText = ''
      }
}
}



const calculator = new Calculator (upperTxt, lowerTxt)

numberBtn.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText) //append whatever that is written inside the button//
        calculator.updateDisplay()
    })
})

operationBtn.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })

equalBtn.addEventListener("click", () => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearBtn.addEventListener("click", () => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteBtn.addEventListener("click", () => {
    calculator.delete()
    calculator.updateDisplay()
})