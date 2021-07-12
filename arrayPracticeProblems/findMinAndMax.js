function findSecondSmallestAndSecondHighest(number) {
    var result = {};
    var numArr = [];
    for (i = 0; i < number; i++) {
        numArr.push(Math.floor(Math.random() * (999 - 100 + 1) + 100));
    }
    numArr.sort();
    console.log("Sorted array", numArr);
    result.secondSmallest = getSecondSmallest(numArr);
    result.secondGreatest = getSecondGreatest(numArr);
    return result;
}
var result = findSecondSmallestAndSecondHighest(10);

function getSecondSmallest(arr) {
    let i, lowest, secondLowest;
    if (arr.length < 2) {
        console.log(" Invalid Input ");
        return;
    }
    lowest = Number.MAX_VALUE;
    secondLowest = Number.MAX_VALUE;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < lowest) {
            secondLowest = lowest;
            lowest = arr[i];
        } else if (arr[i] < secondLowest && arr[i] != lowest) {
            secondLowest = arr[i];
        }
    }
    if (secondLowest == Number.MAX_VALUE) {
        console.log("There is no second smallest element");
    } else {
        console.log("The smallest element is " + lowest + " and second " +
            "Smallest element is " + secondLowest);
    }
    return secondLowest;
}

function getSecondGreatest(arr) {
    let i, greatest, secondGreatest;
    if (arr.length < 2) {
        console.log(" Invalid Input ");
        return;
    }
    greatest = Number.MIN_VALUE;
    secondGreatest = Number.MIN_VALUE;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > greatest) {
            secondGreatest = greatest;
            greatest = arr[i];
        } else if (arr[i] > secondGreatest && arr[i] != greatest) {
            secondGreatest = arr[i];
        }
    }
    if (secondGreatest == Number.MIN_VALUE) {
        console.log("There is no second greatest element");
    } else {
        console.log("The greatest element is " + greatest + " and second " +
            "Greatest element is " + secondGreatest);
    }
    return secondGreatest;
}