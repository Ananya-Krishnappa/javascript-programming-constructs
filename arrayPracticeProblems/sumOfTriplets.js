function findTripletsWithSumZero(arr) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    var result = arr.reduce(reducer);
    if (result == 0) {
        console.log("The sum of three integer is ", result);
    }
}
findTripletsWithSumZero([0, -1, 1]);