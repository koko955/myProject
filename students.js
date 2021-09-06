function demo(input) {

    let brStudenti = Number(input[0]);
    let total = 0;
    let topStudent = 0;
    let betStudent = 0;
    let bet = 0;
    let fail = 0;
    for (let i = 1; i <= brStudenti; i++) {
        let current = Number(input[i]);
        total += current;
        if (current >= 5) {
            topStudent ++;
        } else if (current >= 4 && current <= 4.99) {
            betStudent ++;
        }else if(current>=3 && current<=3.99){
bet ++;
        }else {
            fail ++;
        }
    }
    console.log(`Top students: ${(topStudent/brStudenti*100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(betStudent/brStudenti*100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(bet/brStudenti*100).toFixed(2)}%`);
    console.log(`Fail: ${(fail/brStudenti*100).toFixed(2)}%`);
    console.log(`Average: ${(total/brStudenti).toFixed(2)}`);
}

demo(['10',
    '3.00',
    '2.99',
    '5.68',
    '3.01',
    '4',
    '4',
    '6.00',
    '4.50',
    '2.44',
    '5'
    
    
    
    ]);