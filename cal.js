class Calculator {
    constructor(upperTxt, lowerTxt) { //to set variable & determine where to place the display text//
        this.upperTxt = upperTxt
        this.lowerTxt = lowerTxt
        this.clear() //run this function as soon as a new cal is created to set things to default//
}

clear() {
    this.upper = ''
    this.lower = ''
    this.operation = undefined
}

delete() {

}

appendNumber(number) {
    if (number === '.' && this.lower.includes('.')) return
    this.lower = this.lower.toString() + number.toString()
}

chooseOperation(operation) {

}

compute () {

}

updateDisplay() {
    this.lowerTxt.innerText = this.lower
}
}

const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-op]');
const allClearBtn = document.querySelector('[data-ac]');
const deleteBtn = document.querySelector('[data-del]');
const equalBtn = document.querySelector('[data-equal]');
const upperTxt= document.querySelector('[data-upper]');
const lowerTxt= document.querySelector('[data-lower]');

const calculator = new Calculator (upperTxt, lowerTxt)

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText) //append whatever that is written inside the button//
        calculator.updateDisplay()
    })
})