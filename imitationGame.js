function game(input){

let res = input.shift();

while(input[0] != "Decode"){
let tokens = input.shift().split('|');
let comm = tokens[0]

if(comm == "Move"){
let index = Number(tokens[1])
let left = res.substring(0, index)
let right = res.substring(index)

res = right+left;
}

else if(comm =="Insert"){
    let index = Number(tokens[1])
    let left = res.substring(0,index)
    let right = res.substring(index)
    res = left+tokens[2]+right;
}

else if(comm =="ChangeAll"){
res = res.split(tokens[1]).join(tokens[2])
}
}

console.log('The decrypted message is: ' + res)


}
game(['zzHe',

    'ChangeAll|z|l',
    
    'Insert|2|o',
    
   'Move|3',
    
    'Decode'
    ])