//WAP to create a new array containing only perfect squares from another array.

const num = [1,4,16,63,36,53,18,17,81];
const perfect = [];
for(let i of num){
    if(Number.isInteger(i**0.5)){
        perfect.push(i);
    }
}
console.log(perfect);


//WAP to create a new array containing 10% discounted prices from an array of prices.
const price =[100,210,280,399,550];
const discount =[];

for(let p of price){
    discount.push(p*0.9);
}
console.log(discount);

//map 
const discountedprice = price.map((p)=> {return p*0.9});
console.log(discountedprice);


const nums1 = [4,57,8,7]
const square =nums1.map((p)=>{return p**2})

console.log(square);


// filter
const perfectnums = nums1.filter((p)=> {return Number.isInteger(p**0.5)})
console.log(perfectnums);

const price2 = ['₹423.22','₹123.452'];
const price_without_decimal = price2.map((p)=> {return parseInt(p.slice(1))});
console.log(price_without_decimal);


names =['ramu','shamu','pinki','kaliyan']
names1= names.filter((p)=> {return p.length>=5 })
console.log(names1);


const nmaes2= names.map((p)=> {return p.toUpperCase() })
console.log(nmaes2);