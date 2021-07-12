var myArgs = process.argv.slice(2);
var number = myArgs[0];

function Palindrome(number) {
    var rem, temp, final = 0;
    temp = number;
    while (number > 0) {
        rem = number % 10;
        number = parseInt(number / 10);
        final = final * 10 + rem;
    }
    if (final == temp) {
        console.log("The number is Palindrome");
    } else {
        console.log("The number is not palindrome");
    }
}
Palindrome(number);