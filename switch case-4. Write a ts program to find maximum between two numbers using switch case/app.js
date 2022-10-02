//4. Write a ts program to find maximum between two numbers using switch case.
var a = 10;
var b = 6;
switch (true) {
    case (a > b): {
        console.log("a is maximum number");
        break;
    }
    case (a < b): {
        console.log("b is maximum number");
        break;
    }
    default: {
        console.log("Please enter a digit");
        break;
    }
}
