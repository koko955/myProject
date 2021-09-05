function ages(num1,num2){
let sum = 0;
let num = '';
for(i=num1;i<=num2;i++){
    num+=` ${i}`
sum +=i
}

console.log(num)
console.log(`Sum: ${sum}`)

}
ages(5,10)