var myArgs = process.argv.slice(2);
var num = myArgs[0];

function numToWeekday(num) {
    var ones = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    var numString = num.toString();
    if (num < 0) {
        throw new Error('Negative numbers are not supported.');
    }
    if (num < 7) {
        return ones[num];
    } else {
        throw new Error('Please pass a number between 0 to 6');
    }
}
var result = numToWeekday(num);
console.log(result);