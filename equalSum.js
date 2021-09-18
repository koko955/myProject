function demo(list) {

    let res = false;
    for (let i = 0; i < list.length; i++) {
        let left = 0;
        let right = 0;

        for (let leftIdx = 0; leftIdx < i; leftIdx++) {
            let curr = list[leftIdx];
            left += curr;
        }

        for (let rightIdx = i + 1; rightIdx < i; rightIdx++) {
            let curr = list[rightIdx];
            right += curr;
        }

if(left ===right){
console.log(i);
res = true;
break;
}




    }
if(res===false){
console.log('no')

}
}
demo();