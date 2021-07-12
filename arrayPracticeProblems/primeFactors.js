var myArgs = process.argv.slice(2);
var num = myArgs[0];

function prime_factors(num) {
    const result = [];
    for (let i = 2; i <= num; i++) {
        while (is_prime(i) && num % i === 0) {
            if (!result.includes(i)) result.push(i);
            num /= i;
        }
    }
    return result;
}
console.log(prime_factors(num));
function is_prime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}