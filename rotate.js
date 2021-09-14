function demo(arr,num){
for(let i = 0 ;i<num;i++){
let first = arr[0];

for(let j=0;j<arr.length-1;j++){
arr[j]=arr[j+1];

}
let index = arr.length-1;
arr[index]= first;

}
console.log(arr.join(' '));


}
demo([]);