// WAP to print all prime numbers in a range.
const prime_number_in_rang = (range1,range2) => {
let number = []
    for(let i=range1; i<=range2; i++){
        x=0;
        for(let j=2; j<(i/2); j++){
            if(i%j === 0){
                x=1;
            }
        }
        if(x === 0){
            number.push(i);
        }
    
        }

        return number
}
prime_numbers= prime_number_in_rang(1,10)
console.log(prime_numbers);


//WAP to print all perfect squares in a range.

const perfect_square_number_in_range = (perfect_number_range1,perfect_number_rang2) =>{
    let number1=[]
    for( let i=perfect_number_range1; i< perfect_number_range2; i++){
    if( perfect_number_range1 === parseInt(perfect_number_range1)){
        number1.push(perfect_number_range1);
    }
        }

    return number1;
}

perfect_square= perfect_square_number_in_range(2,100);
console.log(perfect_square);



