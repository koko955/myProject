function demo(input) {
    let bujet = Number(input[0]);
    let season = input[1];
    let price = 0;
    if (bujet <= 100) {
        if (season === 'summer') {
            price = bujet * 0.3;
            console.log('Somewhere in Bulgaria');
            console.log(`Camp - ${price.toFixed(2)}`)
        } else if (season === 'winter') {
            price = bujet * 0.7;
            console.log('Somewhere in Bulgaria');
            console.log(`Hotel - ${price.toFixed(2)}`)
        }
    }else if (bujet<=1000){
        if (season ==='summer'){
            price = bujet * 0.4;
            console.log('Somewhere in Balkans');
            console.log(`Camp - ${price.toFixed(2)}`)
        }else if (season==='winter'){
            price = bujet * 0.8;
            console.log('Somewhere in Balkans');
            console.log(`Hotel - ${price.toFixed(2)}`)
        }
    }else if (bujet > 1000){
        price = bujet * 0.9;
        console.log('Somewhere in Europe');
        console.log(`Hotel - ${price.toFixed(2)}`)
    }
    









}


demo(['5064', 'winter']);