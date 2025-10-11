/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
let Adjectives = {
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}

let Shop = {
    1:"Engine",
    2:"Foods",
    3:"Garments"
}

let Another = {
    1:"Bros",
    2:"Limited",
    3:"Hub"
}

let var1 = Math.floor((Math.random() *(3-1 +1 ) )+1);
let var2 = Math.floor((Math.random() *(3-1 +1 ) )+1);
let var3 = Math.floor((Math.random() *(3-1 +1 ) )+1);

console.log(var1 + " "+var2+ " "+var3);

console.log(Adjectives[var1] + " "+Shop[var2]+ " "+Another[var3]);