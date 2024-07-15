function findProductSign(num1, num2, num3) {
    // Calculate the product of the three numbers
    let product = num1 * num2 * num3;

    if (product > 0) {
        console.log("The sign is +");
    } else if (product < 0) {
        console.log("The sign is -");
    } else {
        console.log("The product is zero");
    }
}

let number1 = 3;
let number2 = -7;
let number3 = 2;

findProductSign(number1, number2, number3);
