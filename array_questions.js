ūūUUUU//WAP to print square all elements in an array.
const array1 = [5,6,3,9,11,12,98];

array1.forEach( (n) => { console.log(n**2);});

//WAP to print all even numbers in an array.
console.log();
array1.forEach( (n) => { 
    if( n%2 === 0 ){
    console.log(n);
    }
});

// 3. WAP to create a new array containing only perfect squares from another array.

console.log();
const array2=[]
array1.forEach( (n) => { 
    if( n**0.5 === parseInt(n**0.5) ){
        array2.push(n);

    }
});
console.log(array2);


//4. WAP to create a new array containing 10% discounted prices from an array of prices.
const price_array =[1099,42,532,25,638,346];
const discounted_price_array = []
price_array.forEach( (n) => {

    discounted_price_array.push(n-(n*10/100))
} );

console.log(discounted_price_array);
