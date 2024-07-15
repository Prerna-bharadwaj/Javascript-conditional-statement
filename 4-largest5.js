function findLargestNumber(num1, num2, num3, num4, num5) {
    let largestNumber = num1;

    if (num2 > largestNumber) {
        largestNumber = num2;
    }
    if (num3 > largestNumber) {
        largestNumber = num3;
    }
    if (num4 > largestNumber) {
        largestNumber = num4;
    }
    if (num5 > largestNumber) {
        largestNumber = num5;
    }

    return largestNumber;
}

let number1 = -5;
let number2 = -2;
let number3 = -6;
let number4 = 0;
let number5 = -1;

let largest = findLargestNumber(number1, number2, number3, number4, number5);
console.log(`The largest number is: ${largest}`); 
