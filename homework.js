// x=198;
// for(let i=1; i<=(x/2); i++){
//     if(x%i === 0){
//         if((i*i) === x){
//             console.log("It's a perfect square");
//             break;
//         }
//         if((i*i)>x){
//             console.log("It's not a perfect square");
//             break;
//         }

//     }

// }
n = 37
sr = Math.sqrt(n)

if((sr*sr) == n)
{
    console.log('True');
}

else
{
    console.log("False")
}


a = 15;
b = 7; 
c = 70;
   
greatest = Math.max(a, Math.max(b,c));

console.log(greatest)



a = 0;
b = 1;
console.log(a);
console.log(b);
for(i = 1;i<=5;i++)
{
    next = a+b;
    console.log(next);
    a=b;
    b=next;
}