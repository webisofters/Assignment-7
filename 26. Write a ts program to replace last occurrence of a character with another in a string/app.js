//26. Write a ts program to replace last occurrence of a character with another in a string.
var a = "welcome to class";
var b = a.lastIndexOf("l");
var c = "L";
var d = a.substring(0, b) + c + a.substring(b + 1);
console.log(d);
