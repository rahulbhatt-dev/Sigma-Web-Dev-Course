console.log("Hello I am conditional tutorial")

let age = 18;
// let grace = 2;

// age += grace
// console.log(age)
// console.log(age + grace)ṇ
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

/*
I am a 
multiline 
comment
*/

if (age == 18) {
    console.log("You can drive");
    console.log("You can drive");
}

else if (age == 0) {
    console.log("Are you kidding?");
        console.log("Are you kidding?");
}

else if (age == 1) {
    console.log("Are you again kidding?");
    console.log("Are you again kidding?");
}

else {
    console.log("You cannot drive");
    console.log("You cannot drive");    
}


// ternary opreator and alternative to if else ladder

a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}

*/
