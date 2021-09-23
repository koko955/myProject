function sort(num){

let newArr = [];
let numLength = num.length;

for(let i = 0 ;i<numLength;i++){
let number;
if(i%2==0){
number = Math.max(...num)
}else {
    number = Math.min(...num)
}

newArr.push(number);
num.splice(num.indexOf(number),1)

}

console.log(newArr.join(' '))


}
sort([1,22,3,122,4,33,45,11,2])