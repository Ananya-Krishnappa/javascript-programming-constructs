var headCount = 0;
var tailCount = 0;
while (headCount < 11 && tailCount < 11) {
    let num = Math.random();
    if (num < 0.5) {
        headCount++;
        console.log("HEAD", headCount);
        if (headCount == 11) {
            console.log("Head wins");
            break;
        }
    } else {
        tailCount++;
        console.log("TAIL", tailCount);
        if (tailCount == 11) {
            console.log("Tail wins");
            break;
        }
    }
}