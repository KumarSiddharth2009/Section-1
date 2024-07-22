function addnums(a,b){
    var c=a+b;
    console.log(c);

}

addnums(3,5);
// console.log(c);

const getavg = function(m1,m2,m3){
    const avg = (m1+m2+m3)/3;

    return  avg;

}

let result = getavg(78,89,90);

console.log(result);

const factorial = (n) => {
    let f=1
    for(let i=n; i>1; i--){
        f=f*i;
    }

    return f;
}

let ans= factorial(6);
console.log(ans);


//  Wap to sum of all number in the given range 

const sumofrange = (range1,range2) => {
    let x=0
    for(let i=range1; i<=range2; i++){
        x=x+i;
    }
    return x;
}

console.log(sumofrange(3,10));