// 1. 2. Write a ts program to find maximum between three numbers using conditional operator.
var a = 5, b = 10, c = 20, d;
d = (a > b) ?
    (a > c ? a : b) :
    (c > b ? c : b);
console.log("max number is ".concat(d));
