function demo(arr) {
    let myArr = [];
    for (el of arr) {
        if (el < 0) {
            myArr.unshift(el);

        } else {
            myArr.push(el);
        }
    }
        for (el of myArr) {
            console.log(el);
        }
    
}
demo([7, -2, 8, 9]);