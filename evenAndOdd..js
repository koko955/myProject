function evenAndOdd(num) {
    let even = 0;
    let odd = 0;

    let numberTostr = num.toString() //String(num)
    
for(el of numberTostr){
if(Number(el) % 2===0){
even+=Number(el)
}else{
    odd+=Number(el)
}
}

let res = `Odd sum = ${odd},Even sum = ${even}`;
return res;
}
 evenAndOdd(12123);
console.log( evenAndOdd(12123))