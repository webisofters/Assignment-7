//6. Write a ts program to check whether a number is positive, negative or zero using switch case.
var a = -100;
switch (true) {
    case (a == 0): {
        console.log("Entered number is zero");
        break;
    }
    case (a < 0): {
        console.log("Entered number is negative");
        break;
    }
    case (a > 0): {
        console.log("Entered number is posetive");
        break;
    }
    default: {
        console.log("something went wrong");
        break;
    }
}
