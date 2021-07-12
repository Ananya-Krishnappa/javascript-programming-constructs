var myArgs = process.argv.slice(2);
var date = myArgs[0];
var month = myArgs[1];

function checkDateInRange(date, month) {
    if (month < 3 || month > 6) {
        return false;
    } else if (month == 3 && date < 20) {
        return false;
    } else if (month == 6 && date > 20) {
        return false;
    } else {
        return true;
    }
}
var result = checkDateInRange(date, month)
console.log(result);