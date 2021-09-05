function demo(list) {
    let arr = [];
    for (let i = 0; i < list.length; i++) {
        let curr = list[i];
        let isTop = true;

        for (let j = i + 1; j < list.length; j++) {
            let rightNum = list[i];

            if (rightNum >= curr) {
                isTop = false;
                break;

            }
        }

        if (isTop) {
            arr.push(curr);
        }
    }

    console.log(arr.join(' '));



}
demo([1,2,3,5]);