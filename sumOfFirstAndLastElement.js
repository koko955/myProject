function demo(numAsStr){

let first = Number(numAsStr.shift()); //premahva purviq element ot masiva
let last = Number(numAsStr.pop());//premahva posledniq element ot masiva


return first + last ;

}
console.log(demo(['10','2','3','4','45']));