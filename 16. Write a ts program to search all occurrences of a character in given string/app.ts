//16. Write a ts program to search all occurrences of a character in given string.
var a:string = "universe"
var b:string = "r"

function countString() {
    var count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a.charAt(i) == b) {
            count ++;
        }
    }
    return count;
}
const result = countString();
console.log(result);
