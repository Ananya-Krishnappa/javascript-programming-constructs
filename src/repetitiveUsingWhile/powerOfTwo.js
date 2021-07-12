var myArgs = process.argv.slice(2);
var n = myArgs[0];

function powerOfTwo(n) {
    var i = 0;
    while (i <= n && Math.pow(2, i) <= 256) {
        console.log(Math.pow(2, i));
        i++;
    }
}
powerOfTwo(n);