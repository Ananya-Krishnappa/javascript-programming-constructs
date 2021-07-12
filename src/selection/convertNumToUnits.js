var myArgs = process.argv.slice(2);
var num = myArgs[0];

function numToUnit(num) {
    var ones = ['', 'unit', 'tens', 'hundred', 'thousand'];
    var numString;
    if (num != null) {
        numString = num.toString();
    }
    if (null != numString) {
        var valid = checkIsValid(numString);
        if (valid == false) {
            throw new Error('Please pass a numbers like 1,10,100,1000');
        }
        if (numString.length <= 0) {
            throw new Error('Negative numbers are not supported.');
        }
        if (numString.length < 5) {
            return ones[numString.length];
        } else {
            throw new Error('Please pass a numbers like 1,10,100,1000');
        }
    }
}

function checkIsValid(numString) {
    var isValid = true;
    for (i = 0; i < numString.length; i++) {
        if (i == 0) {
            if (numString[i] != 1) {
                isValid = false;
                break;
            }
        } else if (numString[i] != 0) {
            isValid = false;
            break;
        }
    }
    return isValid;
}
var result = numToUnit(num);
console.log(result);