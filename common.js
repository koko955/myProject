function demo(arr, arr2) {

    for (let i = 0; i < arr.length; i++) {
        let first = arr[i];
        for (let i = 0; i < arr2.length; i++) {
            let second = arr2[i];

            if (first === second) {

                console.log(first);

            }


        }
    }



}
demo(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', 2])