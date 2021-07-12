let birthMonthMap = new Map();
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (i = 0; i < 50; i++) {
    var birthMonth = getRandomNumber(1, 12);
    let individualsArr = [];
    if (birthMonthMap.has(birthMonth)) {
        individualsArr = birthMonthMap.get(birthMonth);
        individualsArr.push(i);
    } else {
        individualsArr.push(i);
    }
    birthMonthMap.set(birthMonth, individualsArr);
}
console.log(birthMonthMap);