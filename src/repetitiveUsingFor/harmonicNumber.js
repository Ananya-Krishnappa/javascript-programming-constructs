var myArgs = process.argv.slice(2);
var N = myArgs[0];

function nthHarmonic(N) {
    let harmonic = 1.00;
    for (let i = 2; i <= N; i++) {
        harmonic += parseFloat(1) / i;
    }
    return harmonic;
}
result = nthHarmonic(N);
console.log(result);