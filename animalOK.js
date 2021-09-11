function demo(input) {


    let cats = Number(input[0]);
    let food = 0;
    let cena = 12.45;
    for (let i = 1; i <= cats; i++) {
        let current = Number(input[i]);
        food += current;
        if (current <= 200) {
            console.log(`Group 1: ${current} cats.`);
        } else if (current <= 300) {
            console.log(`Group 2: ${current} cats.`);
        } else if (current <= 400) {
            console.log(`Group 3: ${current} cats.`);
        }

    }
}
    demo(['6',
        '102',
        '236',
        '123',
        '399',
        '342',
        '222'
    ]);