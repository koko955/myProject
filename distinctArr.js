function distinct(input){
let newArr = [];

for(let i=0 ; i<input.length;i++){
let curr = input[i];

if(!newArr.includes(curr)){
newArr.push(curr)
}
}

console.log(newArr.join(' '));
}
distinct([7, 8, 9, 7, 2, 3,
    4, 1, 2])