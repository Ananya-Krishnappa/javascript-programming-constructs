var myArgs = process.argv.slice(2);
var a = myArgs[0];
var b = myArgs[1];
var c = myArgs[2];
var exprArray = ['(a + b * c)', '(c + a / b)', '(a % b + c)', '(a * b + c)'];
var result = [];
exprArray.forEach(expr => {
    result.push(eval(expr));
});
console.log(result);
var minValue = Math.min(...result);
var maxValue = Math.max(...result);
var minIndex = result.indexOf(minValue.toString());
var maxIndex = result.indexOf(maxValue.toString());
console.log("The operation which evaluated to min value", exprArray[minIndex]);
console.log("The operation which evaluated to max value", exprArray[maxIndex]);