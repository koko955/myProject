function demo(input) {
    let flowerType = input[0];
    let brFlower = Number(input[1]);
    let bujet = Number(input[2]);
    let sum = 0;

    switch (flowerType) {
        case 'Roses': sum = brFlower * 5;
            if (brFlower > 80) {
                sum = sum * 0.9;
            } break;
        case 'Dahlias': sum = brFlower * 3.8;
            if (brFlower > 90) {
                sum = sum * 0.85;
            } break;
        case 'Tulips': sum = brFlower * 2.8;
            if (brFlower > 80) {
                sum = sum * 0.85;
            }break;
        case 'Narcissus': sum = brFlower * 3;
            if (brFlower < 120) {
                sum = sum * 1.15;
            }break;
        case 'Gladiolus': sum = brFlower * 2.5;
            if (brFlower < 80) {
                sum *= 1.20;
            }break;
    }

    if (bujet >= sum){
        console.log(`Hey, you have a great garden with ${brFlower} ${flowerType} and ${(bujet-sum).toFixed(2)} leva left.`)
    }else {
        console.log(`Not enough money, you need
        ${(sum-bujet).toFixed(2)} leva more.`)
    }

}
demo(['Roses',
    '55',
    '250']);