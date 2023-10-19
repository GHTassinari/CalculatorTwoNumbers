let firstNumber = prompt("Inform the first number:");
let secondNumber = prompt("Inform the second number:");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const restDiv = firstNumber % secondNumber;

alert("The sum is: " + sum);
alert("The subtraction is: " + sub);
alert("The multiplication is: " + multi);
alert("The division is: " + div);
alert("The rest of the division is: " + restDiv);

if (sum % 2 == 0) {
  alert(`The sum of the numbers is even: ${sum}`);
} else {
  alert(`The sum of the numbers is odd: ${sum}`)
}

if (firstNumber==secondNumber){
  alert("The first, and second numbers, are the same!")
} else{
  alert("The numbers are different.")
}
