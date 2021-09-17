function solve(input){

let order = Number(input[0])
let price = Number(input[1]);
let days = Number(input[2]);
let capsuleCount = Number(input[3]);

let price2 = Number(input[4]);
let days2 = Number(input[5]);
let capsuleCount2 = Number(input[6]);

if(order>1){
     sum = ((days*capsuleCount)*price);
    sum2 = ((days2*capsuleCount2)*price2);
    total = sum+sum2
    console.log(`The price for the coffee is: $${sum.toFixed(2)}`)
console.log(`The price for the coffee is: $${sum2.toFixed(2)}`)
console.log(`Total: $${total.toFixed(2)}`)
}else{
     sum = ((days*capsuleCount)*price);
     total2 = sum
     console.log(`The price for the coffee is: $${sum.toFixed(2)}`)
     console.log(`Total: $${total2.toFixed(2)}`)

}

}
solve(["1",
"9.223",
"31",
"433"])






