var myArgs = process.argv.slice(2);
var unit = myArgs[0];
var value = myArgs[1];

function tempUnitConversion(value, unit) {
    var result;
    switch (unit) {
        case "C":
            if (value > 100 || value < 0) {
                console.log("Please enter a value between 0 1o 100");
            } else {
                result = (value * 9 / 5) + 32;
                break;
            }
            case "F":
                if (value > 212 || value < 32) {
                    console.log("Please enter a value between 32 1o 212");
                } else {
                    result = (value - 32) * 5 / 9;
                    break;
                }
    }
    return result;
}
var res = tempUnitConversion(value, unit);
console.log(value, unit, 'is', res, unit == 'F' ? 'celsius' : 'fahrenheit');