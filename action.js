function demo(input) {

    let bujet = Number(input[0]);
    let statisti = Number(input[1]);
    let cenaNaObleklo = Number(input[2]);

    let dekor = 0.1 * bujet;
    let obleklo = statisti * cenaNaObleklo;

    if (statisti > 150) {
        obleklo * 0.9;
    }


    let totalSum = dekor + obleklo;

    if (totalSum > bujet) {

        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalSum - bujet).toFixed(2)} leva more.`);

    } else {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(bujet - totalSum).toFixed(2)} leva left.`);

    }




}
demo(['20000',
    '120',
    '55.5']);