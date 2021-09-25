function toJson(name,lastName,hairColor){
let obj = {
name ,
lastName ,
hairColor
}

console.log(JSON.stringify(obj));
}
toJson('koce','atanasov',26)