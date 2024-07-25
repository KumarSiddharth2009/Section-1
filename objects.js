const user = {
    name : 'Raju',
    email :'raju@.com',
    passward : 'abc123'
};

console.log(user.email);
console.log(user['name']);

user.email = 'raju007@mail.com';

console.log(user);

user.address = 'Lucknow';
console.log(user);
console.log(user.address);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const brand = 'Samsung';
const model = 'S24';
const price = 105000;
const color = ['red','black','white'];


const smartphone = {brand,model,price,color};
console.log(smartphone);


const {address} =user;
console.log(address);

console.log(smartphone.price);

console.log(smartphone.color[1]);


smartphone.color.push('gray');
 
console.log(smartphone.color);

smartphone.color.splice(2,1,'moonwhite');
console.log(smartphone.color);

const smartphonelist = [
                    {
                         brand : 'Samsung',
                         model : 'S24',
                         color : ['red','black','white'],
                         price : 105000,
                    },



                    
                    {
                         brand : 'One plus ',
                         model : '12',
                         color : ['green','Gray'],
                         price : 44999,
                    },



                    {
                         brand : 'Apple',
                         model : 'iphone 15',
                         color : ['black','white'],
                         price : 125000,
                    },



                    {
                         brand : 'Google',
                         model : 'Pixel 8',
                         color : ['red','black','white'],
                         price : 56000,
                    },



                    {
                         brand : 'Motorala',
                         model : 'G8',
                         color : ['blue','green'],
                         price : 14999,
                    },


                    {
                         brand : 'LAVA',
                         model : '10',
                         color : ['oceanblue','plantgreen'],
                         price : 14999,
                    },




];

console.log(smartphonelist.length);

// Access the price of apple 
// access the last color of google pixel

console.log(smartphonelist[2].price);
console.log(smartphonelist[3].color.at(-1));
console.log(smartphonelist[3].color[smartphonelist[3].color.length-1]);



console.log();
console.log();
console.log();
iphone15price = smartphonelist.filter((p)=> {return (p.color.includes('white')) });
const query = 'sam'
// samsungphone= smartphonelist.filter((p)=> {return (p.brand.toLowerCase() === query.toLocaleLowerCase()) });

const samsungphone= smartphonelist.filter((phone)=> { return phone.brand.toLowerCase().includes(query.toLocaleLowerCase())})



console.log(samsungphone);

console.log(iphone15price);

