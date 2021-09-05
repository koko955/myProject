function demo(input) {

    let recordByseconds = Number(input[0]);
    let metres = Number(input[1]);
    let timeInseconds = Number(input[2]);


    let distance = metres * timeInseconds;
    let delay = Math.floor(metres / 15) * 12.5;
    let totalTime = distance + delay;

    if (totalTime < recordByseconds) {

        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds`);

    } else {
        console.log(`No, he failed! He was ${(totalTime - recordByseconds).toFixed(2)} seconds slower.`);
    }




}
demo(['55555.67',
    '3017',
    '5.03'])