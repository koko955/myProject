function demo(input) {

    let brTovari = Number(input[0]);
    let total = 0;
    let micro = 0;
    let kamion = 0;
    let vlak = 0;

    for (let i = 1; i <= brTovari; i++) {
        let current = Number(input[i]);
        total += current;
    
    if (current <= 3) {
        micro += Number(input[i]);
    } else if (current <= 11) {
        kamion += Number(input[i]);
    } else if (current >= 12) {
        vlak += Number(input[i]);
    }

    }
let sr = (micro*200 + kamion*175 + vlak*120)/total;
let srMicro = micro/total*100;
let srKamion = kamion/total*100;
let srVlak = vlak/total*100;

console.log(sr.toFixed(2));
console.log(`${srMicro.toFixed(2)}%`);
console.log(`${srKamion.toFixed(2)}%`);
console.log(`${srVlak.toFixed(2)}%`);


}
demo(['4',
    '1',
    '5',
    '16',
    '3'
]);
