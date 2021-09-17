function printCity(city){

console.log(`name -> ${city.name}`);
console.log(`area -> ${city.area}`);
console.log(`population -> ${city.population}`);
console.log(`country -> ${city.country}`);
console.log(`postCode -> ${city.postCode}`);
}

let myCity = {
name:'Katunica',
area: 1234,
population:1857,
country:'Bulgaria',
postCode:4120
}
printCity(myCity);