function demo(input){
    let cenaQgodi = Number(input[0]);
    let bananas = Number(input[1]);
    let oranges = Number(input[2]);
    let raspberries = Number(input[3]);
    let strawberries = Number(input[4]);

let cenaRaspberries = cenaQgodi/2;
let cenaOranges = cenaRaspberries - (0.4*cenaRaspberries);
let cenaBananas = cenaRaspberries - (0.8*cenaRaspberries);
let sumOfRaspberries = raspberries*cenaRaspberries;
let sumOfOranges = oranges*cenaOranges;
let sumOfBananas = bananas*cenaBananas;
let sumOfQgodi = cenaQgodi*strawberries;

let totalSum = sumOfBananas+sumOfOranges+sumOfRaspberries+sumOfQgodi;
console.log(totalSum);


}
demo(['63.5' ,'3.57' ,'6.35' ,'8.15' ,'2.5']);