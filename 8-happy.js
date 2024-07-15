function isHappyNumber(num) {
    let seen = new Set();

    while (num !== 1 && !seen.has(num)) {
        seen.add(num);
        num = sumOfSquaresOfDigits(num);
    }

    return num === 1;
}

function sumOfSquaresOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

function findFirstNHappyNumbers(n) {
    let happyNumbers = [];
    let number = 1;

    while (happyNumbers.length < n) {
        if (isHappyNumber(number)) {
            happyNumbers.push(number);
        }
        number++;
    }

    return happyNumbers;
}


let first5HappyNumbers = findFirstNHappyNumbers(5);
console.log("The first 5 happy numbers are:", first5HappyNumbers);
