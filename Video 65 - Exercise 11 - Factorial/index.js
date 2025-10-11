let n = prompt('Input the number');
let arr = []
for (let index = n; index > 0; index--) {
    arr.unshift(index)
    
}

let factn = arr.reduce((a,b)=>{return a*b});

console.log(factn)