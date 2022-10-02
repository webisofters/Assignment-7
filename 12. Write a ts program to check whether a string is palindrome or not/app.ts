//12. Write a ts program to check whether a string is palindrome or not.

var a = "a dad a"
var b = a.split("");
var c = b.reverse()
var d = c.join("")
console.log(d);

if(d == a){
    console.log("it is palindrome");
    
}
else{
    console.log("it is not palindrome");
    
}


