//WAp TO CHECK NUMBER IS PRIME
const n1=8;
let prime =true
for(let i=2; i<n1; i++){
    if(n1%i === 0){
        console.log('not prime number');
        prime=false;
        break;
    }
}

if (prime) console.log('prime');

//wap to print reverse of a number
let x= 98756987
r=0
while(x>0){
    z= x%10;
    x=parseInt(x/10);
    r=r*10+z
}
console.log(r);


//WAp to print fibonacci series

let [a,b] =[0,1]
console.log(a);
console.log(b);

for(let i=0; i<8; i++){
    let c = a+b;
    console.log(c);
    [a,b]=[b,c]
}