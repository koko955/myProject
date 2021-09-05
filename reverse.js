function demo(num,input){

let arr = [];
for(let i = 0; i<num;i++){
    arr.push((input[i]));
    
}
let res = [];
    for(let i = arr.length-1;i>=0;i--){
        res.push(arr[i])
    }
    console.log(res.join(' '))
}
demo(5, [10, 20, 30, 40, 50]);