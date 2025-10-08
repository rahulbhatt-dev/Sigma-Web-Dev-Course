let a = 7

function factorial(number){
    //storing array keys (0,1,2.....number +1)
   let arr = Array.from(Array(number+1).keys())
   //we started from 1 and not zero for facotrial and then reduce
   let c = arr.slice(1,).reduce((a, b)=> a*b )
   return c
}


function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}
console.log(factorial(a))
console.log(facFor(a))