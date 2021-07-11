var myArgs = process.argv.slice(2);
var n = myArgs[0];

function powerOfTwo(n) {
    for (i = 0; i <= n; i++) {
        console.log(Math.pow(2, i));
    }
}
powerOfTwo(n);