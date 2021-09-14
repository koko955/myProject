function demo(arr,arr2){
let res = [];

for(let i = 0 ;i<arr.length;i++){
let first = arr[i];
let second = arr2[i];

if(i % 2===0){
let sum = Number(first)+Number(second);
res.push(sum);
}else{
    let result = first + second;
res.push(result);
}

}

let resToStr = res.join(' - ');
console.log(resToStr);

}
demo([]);