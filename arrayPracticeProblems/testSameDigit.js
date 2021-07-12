function testSameDigit(num) {
    var first = num % 10;
    while (num) {
        if (num % 10 !== first) {
            return false;
        }
        num = Math.floor(num / 10);
    }
    return true;
}
repetitiveArr = [];
for (i = 10; i < 100; i++) {
    if (testSameDigit(i)) {
        repetitiveArr.push(i);
    }
}
console.log("Numbers formed of same digits ", repetitiveArr)