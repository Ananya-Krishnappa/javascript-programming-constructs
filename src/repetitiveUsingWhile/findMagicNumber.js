const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var n = 50;
console.log('Think of a number between 1 to 100');
var isMagicNumber = function (n) {
    readline.question(`Is the number in your mind ${n}?`, response => {
        if (response.toLowerCase() == 'y') {
            console.log(`We have guessed the magic number. The number is ${n}`);
            readline.close();
        } else {
            questionLessThan(n);
        }
    });
}
var questionLessThan = function (n) {
    readline.question(`Is the number less than ${n}?`, response => {
        if (response.toLowerCase() == 'y') {
            n = Math.floor(n / 2);
        } else {
            n =  Math.floor(n + (n / 2));
        }
        isMagicNumber(n);
    });
}
isMagicNumber(n);
