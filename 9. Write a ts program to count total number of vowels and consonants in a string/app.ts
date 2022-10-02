//9. Write a ts program to count total number of vowels and consonants in a string.

var abc = 'This is class room';
var wovels = abc.match(/[aeiou]/g)?.length
console.log("No of wovels are", wovels);

var consonent = abc.match(/[bcdfghjklmnpqrstvwxyz]/g)?.length
console.log("No of consonent are", consonent);

