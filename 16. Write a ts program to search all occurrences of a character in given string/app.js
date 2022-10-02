//16. Write a ts program to search all occurrences of a character in given string.
var a = "universe";
var b = "r";
function countString() {
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        if (a.charAt(i) == b) {
            count++;
        }
    }
    return count;
}
var result = countString();
console.log(result);
