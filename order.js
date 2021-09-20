function order(product, quality) {
let price = 0;
    if (product === 'coffee') {
         price = 1.5 * quality;
    } else if (product === 'water') {
         price = 1 * quality;
    } else if (product === 'coke') {
        price = 1.4 * quality;
    } else if (product === 'snacks') {
         price = 2.00 * quality;
    }




    console.log(` ${price.toFixed(2)}`)
}
order('water', 5);
order('coffee', 3);
order('coke', 15);
order('snacks', 4);