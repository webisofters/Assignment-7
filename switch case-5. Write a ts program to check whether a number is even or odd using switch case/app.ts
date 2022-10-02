//5. Write a ts program to check whether a number is even or odd using switch case.

var a:number = 15;
switch (true) {
    case (a%2==0):{
    console.log("a is even number") 
    break;
    }

    default:{
    console.log("a is odd number");
    break;
    }
}