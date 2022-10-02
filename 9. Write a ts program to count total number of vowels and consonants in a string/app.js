//9. Write a ts program to count total number of vowels and consonants in a string.
var _a, _b;
var abc = 'This is class room';
var wovels = (_a = abc.match(/[aeiou]/g)) === null || _a === void 0 ? void 0 : _a.length;
console.log("No of wovels are", wovels);
var consonent = (_b = abc.match(/[bcdfghjklmnpqrstvwxyz]/g)) === null || _b === void 0 ? void 0 : _b.length;
console.log("No of consonent are", consonent);
