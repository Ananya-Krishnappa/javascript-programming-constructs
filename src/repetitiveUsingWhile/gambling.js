var sum = 100;
while (sum < 200 && sum > 0) {
    let num = Math.random();
    if (num < 0.5) {
        sum = sum - 1;
        console.log("Bet lost. Available amount is", sum);
        if (sum == 0) {
            console.log("Your balance is zero. You cannot bet anymore");
            break;
        }
    } else {
        sum = sum + 1;
        console.log("Bet won. Available amount is", sum);
        if (sum == 200) {
            console.log("Your balance is 200. You have gained maximum bet amount. You cannot proceed further");
            break;
        }
    }
}