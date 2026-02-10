let num1 = +prompt("Enter a number: ", 0);
let num2 = +prompt("Enter a number2:", 0);

if(Number.isFinite(num1) && Number.isFinite(num2)) {
    alert(num1 + num2);
}else {
    alert("Type Error");
}