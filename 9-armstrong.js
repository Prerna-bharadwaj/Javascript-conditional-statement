function findArmstrongNumbers() {
    let armstrongNumbers = [];

    for (let num = 100; num <= 999; num++) {
        let sumOfCubes = 0;
        let originalNum = num;
        
        
        while (originalNum > 0) {
            let digit = originalNum % 10;
            sumOfCubes += Math.pow(digit, 3);
            originalNum = Math.floor(originalNum / 10);
        }
        
        // Check if num is an Armstrong number
        if (sumOfCubes === num) {
            armstrongNumbers.push(num);
        }
    }

    return armstrongNumbers;
}


let armstrongNumbers = findArmstrongNumbers();
console.log("Armstrong numbers of 3 digits:", armstrongNumbers);
