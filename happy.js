function bujet(input){

let rent = Number(input[0]);


let cenaTorta = rent* 20/100 ;
let cenaNapitki = cenaTorta * 0.55;
let cenaAnime = rent/3;
let neededSum = rent+cenaTorta+cenaNapitki+cenaAnime;
console.log(neededSum);




}
bujet(["2250"]);