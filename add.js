function demo(arr) {
    let oldSum = 0;
    let newSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        let newNum = 0;




        if (curr % 2 === 0) {
            newNum = curr+ i;
            arr[i] = newNum;
        } else {
            newNum = curr - i;
            arr[i] = newNum;
        }

        oldSum += curr;
        newSum += newNum;

    }

    console.log(arr);
    console.log(oldSum);
    console.log(newSum);


}
demo([5, 15, 23, 56, 35]);