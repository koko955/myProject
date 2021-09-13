function demo(input) {

    let month = Number(input[0]);
    let tokTotal = 0;
let monthWater = 20;
let monthNet = 15 ;
let otherAll = 0;
let otherSum = 0;
    for (let i = 1; i <= month; i++) {
        let tokCurrent = Number(input[i]);
        tokTotal += tokCurrent;
          waterAll = monthWater*month ;
         netAll = monthNet*month ; 
         other = (tokCurrent+monthWater+monthNet)*0.2;
         otherAll = other + tokCurrent+monthWater+monthNet;
         otherSum+=otherAll;
         avr = (tokTotal + waterAll + netAll +otherSum)/month ; 
    }
   console.log(`Electricity: ${tokTotal.toFixed(2)} lv`);
     console.log(`Water: ${waterAll.toFixed(2)} lv`);
     console.log(`Internet: ${netAll.toFixed(2)} lv`);
     console.log(`Other: ${otherSum.toFixed(2)} lv`);
     console.log(`Average: ${avr.toFixed(2)} lv`);
   
}
demo(['5',
    '68.63',
    '89.25',
    '132.53',
    '93.53',
    '63.22']);