const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let diceMap = new Map();
while (checkMaximumCount(diceMap)) {
    var diceNumber = getRandomNumber(1, 6);
    let count = 0;
    if (diceMap.has(diceNumber)) {
        count = diceMap.get(diceNumber);
        count++;
    } else {
        count = 1;
    }
    diceMap.set(diceNumber, count);
}

function getKeyWithMinValue(diceMap) {
    var minimum = {};
    var i = 0;
    for (let [key, value] of diceMap) {
        if (i == 0) {
            minimum.value = value;
            minimum.key = key;
            i++;
        } else if (value < minimum.value) {
            minimum.value = value;
            minimum.key = key;
        }
    }
    return minimum;
}

function getKeyWithMaxValue(diceMap) {
    var maximum = {};
    var i = 0;
    for (let [key, value] of diceMap) {
        if (i == 0) {
            maximum.value = value;
            maximum.key = key;
            i++;
        } else if (value > maximum.value) {
            maximum.value = value;
            maximum.key = key;
        }
    }
    return maximum;
}
var min = getKeyWithMinValue(diceMap);
var max = getKeyWithMaxValue(diceMap)
console.log("Dice", min.key, "has minimum count of", min.value);
console.log("Dice", max.key, "has maximum count of", max.value);

function checkMaximumCount(diceMap) {
    for (let value of diceMap.values()) {
        if (value == 10) {
            return false;
        }
    }
    return true;
}