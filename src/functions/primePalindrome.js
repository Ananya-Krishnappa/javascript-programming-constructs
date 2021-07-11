var myArgs = process.argv.slice(2);
var number = myArgs[0];

function isPrime(number, callRecursively) {
    let prime = true;
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    } else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (prime) {
            console.log(`${number} is a prime number`);
            if (callRecursively) {
                var reverse = getReverseNumber(number);
                isPrime(reverse, false);
            }
        } else {
            console.log(`${number} is a not prime number`);
        }
    } else {
        console.log("The number is not a prime number.");
    }
}

function getReverseNumber(num) {
    var rem, temp, final = 0;
    temp = number;
    while (number > 0) {
        rem = number % 10;
        number = parseInt(number / 10);
        final = final * 10 + rem;
    }
    return final;
}
isPrime(number, true);