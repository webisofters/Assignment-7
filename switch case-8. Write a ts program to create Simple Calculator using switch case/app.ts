//8. Write a ts program to create Simple Calculator using switch case.

var oper:string | null = prompt("Enter oper e.g. + , - , / , *")
var a1:string | null = prompt("Enter value of a")
var a:number = Number(a1)
var b1:string | null = prompt("Enter value of b")
var b:number = Number(b1)
var c:number

switch(oper) {
    case "+" :
        c = a + b
        console.log(c);
        break;

    case "-":
        c = a - b
        console.log(c);
        break;

    case "*":
        c = a * b
        console.log(c);
        break;

    case "/":
        c = a / b
        console.log(c);
        break;

    default:
        console.log('Invalid operator');
        break;
}