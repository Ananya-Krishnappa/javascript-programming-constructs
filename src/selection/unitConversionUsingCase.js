var myArgs = process.argv.slice(2);
var conversionType = myArgs[0];
var value = myArgs[1];

function unitConversion(conversionType, value) {
    var result;
    switch (conversionType) {
        case "inchToFeet":
            result = value * 0.083333;
            break;
        case "feetToMeter":
            result = value / 3.2808;
            break;
        case "feetToInch":
            result = value * 12;
            break;
        case "meterToFeet":
            result = value * 3.2808;
            break;
        default:
    }
    return result;
}
var result=unitConversion(conversionType, value);
console.log(value,conversionType,'is',result);