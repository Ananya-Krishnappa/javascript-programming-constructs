var myArgs = process.argv.slice(2);
var rangeStart = myArgs[0];
var rangeEnd = myArgs[1];
var primeArr = [];
for (number = rangeStart; number < rangeEnd; number++) {
    let isPrime = true;
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    } else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeArr.push(number);
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is a not prime number`);
        }
    } else {
        console.log("The number is not a prime number.");
    }
}
console.log("List of prime numbers in range", rangeStart, '-', rangeEnd, ':', primeArr);