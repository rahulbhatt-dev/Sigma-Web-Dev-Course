/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

function calfun(var1,var2){
    Vsum = var1-var2
    console.log(var1 + '+' + var2 + '=' + Vsum )
    Vsum = var1+var2
    console.log(var1 + '*' + var2 + '=' + Vsum )
    Vsum = var1/var2
    console.log(var1 + '-' + var2 + '=' + Vsum )
    Vsum = var1**var2
    console.log(var1 + '/' + var2 + '=' + Vsum )
}

let a = parseInt(prompt("Enter first number"))  
let b = parseInt(prompt("Enter second number"))

calfun(a,b);