function solve(input) {

    let numbers = input.shift().split(' ');
    let line = input.shift();

    while (line != 'Finish') {
        let [comm, item, newItem] = line.split(' ');
        switch (comm) {

            case "Add":
                add(numbers, item)
                break;
            case "Remove":
                remove(numbers, item)
                break;
            case "Replace":
                replace(numbers, item, newItem)
                break;
            case "Collapse":
                collapse(numbers, item)
                break;

        }

        line = input.shift();
    }

    console.log(numbers.join(' '));
    function add(list, item) {
        if (list.includes(item) == true) {
            list.push(item);
        }
    }

    function remove(list, item) {
        if (list.includes(item) == true) {
            let index = list.indexOf(item)
            list.splice(index, 1)
        }
    }

    function replace(list, item, newItem) {
        if (list.includes(item) == true) {
            let index = list.indexOf(item)
            list[index] = newItem;
        }
    }

    function collapse(list, item) {
        for (el of numbers) {
            if (item < el) {
                list.splice()
            }
        }

    }


}
solve(["1 20 -1 10",
    "Collapse 8",
    "Finish"])

