console.log("single digit random number", singleDigitRandomNumber());

function singleDigitRandomNumber() {
    return Math.floor(Math.random() * 10);
}
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("get random dice number", getRandomNumber(1, 6));
console.log("sum of two random dice numbers", getRandomNumber(1, 6) + getRandomNumber(1, 6));

function sumAndAvgOfTwoDigitRandomNumbers(number, operation) {
    if (operation === "sum") {
        var sum = 0;
        for (i = 0; i < number; i++) {
            sum = sum + (Math.floor(Math.random() * 90 + 10));
        }
        return sum;
    } else if (operation === "average") {
        var sum = 0;
        for (i = 0; i < number; i++) {
            sum = sum + (Math.floor(Math.random() * 90 + 10));
        }
        return sum / number;
    }

}
console.log("Sum Of N Two Digit Random Numbers", sumAndAvgOfTwoDigitRandomNumbers(5, "sum"));
console.log("Avearge Of N Two Digit Random Numbers", sumAndAvgOfTwoDigitRandomNumbers(5, "average"));

function inchToFeet(valNum) {
    var valueInFeet = valNum * 0.083333;
    console.log("Inch to feet");
    console.log(valNum, "inch = ", valueInFeet, " feet");
    return valueInFeet;
}
inchToFeet(42);

function feetToMeter(valNum) {
    return valNum / 3.2808;
}
console.log("Rectangular plot of 60 feet * 40 feet = ", feetToMeter(60), "meter *", feetToMeter(40));

function calculateAreaInAcres(noOfPlots, dimensionXInFeet, dimensionYInFeet) {
    var totalArea = 0;
    for (i = 0; i < noOfPlots; i++) {
        totalArea = totalArea + (feetToMeter(dimensionXInFeet) * feetToMeter(dimensionYInFeet));
    }
    return totalArea / 0.00024710538146717;
}
console.log("Area of plots in acres", calculateAreaInAcres(25, 60, 40));