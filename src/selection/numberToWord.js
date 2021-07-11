var myArgs = process.argv.slice(2);
var num = myArgs[0];

function numToWord(num) {
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var numString = num.toString();
    if (num < 0) {
        throw new Error('Negative numbers are not supported.');
    }
    if (num === 0) {
        return 'zero';
    }
    if (num < 10) {
        return ones[num];
    } else {
        throw new Error('Please pass a single digit number');
    }
}
var result = numToWord(num);
console.log(result);