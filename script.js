let firstNumber = prompt("Inform the first number:")
let secondNumber = prompt("Inform the second number:")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert("The sum is: " + sum)
alert("The subtraction is: " + sub)
alert("The multiplication is: " + multi)
alert("The division is: " + div)
alert("The rest of the division is: " + restDiv)

