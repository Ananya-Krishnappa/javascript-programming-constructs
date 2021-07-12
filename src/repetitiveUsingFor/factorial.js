var myArgs = process.argv.slice(2);
var n = myArgs[0];

function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}
var answer = factorial(n);
console.log("The factorial of " + n + " is " + answer);