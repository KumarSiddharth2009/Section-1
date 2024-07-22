for(let i=0; i<10; i++){
    console.log(i);
}


// WAp to print aall numbers divisible in range of 50to 100
console.log();
for(let i=50; i<101; i++){
    if(i%7 === 0){
        console.log(i);
    }
}

//Wap tp prin t all numbers divisible by 5 and 7 in range of 50 to 100

console.log();
for(let i=50; i<101; i++){
    if(i%7 === 0 && i%5==0){
        console.log(i);
    }
}


// for of loop
console.log('--------------for of loop------------------');
const nums = [7878,578,4636123,78,4,462,6534,63,7879]
for(let i of nums){
    console.log(i);
    
}

//while lop
console.log('--------------wehile loop------------------');
let a= 10;
while(a<20){
    console.log(a);
    a++;
}


//do wehile
console.log('--------------do wehile loop------------------');
let b=10;
do{
    console.log(b);
    b++;
}while(b<10);
