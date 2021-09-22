function problem2(input) {

    let product = input.shift().split('!');
    let line = input.shift();

    while (line != 'Go Shopping!') {
        let [comm, item, newItem] = line.split(' ');

        switch (comm) {

            case "Urgent":
                urgent(product, item)
                break;
            case "Unnecessary":
                unnecessary(product, item)
                break;
            case "Correct":
                correct(product, item, newItem)
                break;
            case "Rearrange":
                rearrange(product, item)
                break;

        }



        line = input.shift();
    }

    console.log(product.join(', '));

    function urgent(list, item) {
        if (list.includes(item) == false) {
            list.unshift(item);
        }
    }

    function unnecessary(list, item) {
        if (list.includes(item) == true) {
            let index = list.indexOf(item)
            list.splice(index, 1)
        }
    }

    function correct(list, item, newItem) {
        if (list.includes(item) == true) {
            let index = list.indexOf(item)
            list[index] = newItem;
        }
    }

    function rearrange(list, item) {
        if (list.includes(item) == true) {
            let index = list.indexOf(item)
            list.splice(index, 1)
            list.push(item)
        }
    }


}
problem2(['Milk!Pepper!Water!Grapes',

   'Urgent Salt',
    
   'Unnecessary Grapes' ,
    
    'Correct Pepper Onion',
    
    'Rearrange Grapes',
    
    'Correct Tomatoes Potatoes',
    
    'Go Shopping!'])