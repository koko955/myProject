function ocenka(input) {
    let bujet = Number(input[0]);
    let season = input[1];
    let brFishers = Number(input[2]);
    
    let sum = 0;
    switch (season) {
        case 'Spring': sum = 3000; break;
        case 'Summer': sum = 4200; break;
        case 'Autumn': sum = 4200; break;
        case 'Winter': sum = 2600; break;

    }
    if (brFishers <= 6) {
        sum = sum * 0.9;
    } else if (brFishers <= 11) {
        sum = sum * 0.85;
    } else {
        sum = sum * 0.75;
    }
    if (brFishers % 2 === 0 && season!=='Autumn') {
        sum = sum * 0.95;
    }

    if (bujet >= sum) {
        console.log(`Yes! You have ${(bujet - sum).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(sum - bujet).toFixed(2)} leva.`)
    }
}
ocenka(['3000', 'Summer', '11']);