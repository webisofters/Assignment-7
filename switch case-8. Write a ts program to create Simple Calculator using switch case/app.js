//8. Write a ts program to create Simple Calculator using switch case.
var oper = prompt("Enter oper e.g. + , - , / , *");
var a1 = prompt("Enter value of a");
var a = Number(a1);
var b1 = prompt("Enter value of b");
var b = Number(b1);
var c;
switch (oper) {
    case "+":
        c = a + b;
        console.log(c);
        break;
    case "-":
        c = a - b;
        console.log(c);
        break;
    case "*":
        c = a * b;
        console.log(c);
        break;
    case "/":
        c = a / b;
        console.log(c);
        break;
    default:
        console.log('Invalid operator');
        break;
}
