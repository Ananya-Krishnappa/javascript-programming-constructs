function findMinAndMaxAmongNRandomNumbers(number) {
    var result = {};
    var numArr = [];
    for (i = 0; i < number; i++) {
        numArr.push(Math.floor(Math.random() * (999 - 100 + 1) + 100));
    }
    result.min = Math.min(...numArr);
    result.max = Math.max(...numArr);
    return result;
}
var result = findMinAndMaxAmongNRandomNumbers(5);
console.log("min", result.min);
console.log("max", result.max);

