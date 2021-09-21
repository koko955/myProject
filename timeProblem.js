function solve(input){
    let e1 = Number(input[0])
    let e2 = Number(input[1])
    let e3 = Number(input[2])
    let people = Number(input[3])
    let sum = e1+e2+e3;
let h = 0;
while(people > 0){
    h++;
    if(h % 4 !=0){
people-=sum
    }
}

console.log(`Time needed: ${h}h.`)

}
solve(['4','7','9','100'])