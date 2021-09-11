function demo(input) {

    let dohod = Number(input[0]);
    let srUspeh = Number(input[1]);
    let minSalary = Number(input[2]);

    let scholarship = Math.floor(minSalary * 0.35);
    let exellentUspeh = Math.floor(srUspeh * 25);

    if (dohod > minSalary) {
        console.log("You cannot get a scholarship!");
    } else if (scholarship > exellentUspeh) {
        console.log(`You get a Social scholarship ${scholarship} BGN`);
    } else if (exellentUspeh >= scholarship) {
        console.log(`You get a scholarship for excellent results ${scholarship} BGN`);

    }

    /* if (scholarship > exellentUspeh){
         console.log(`You get a Social scholarship ${scholarship} BGN`);
     } else if (exellentUspeh >= scholarship){
         console.log(`You get a scholarship for excellent results ${scholarship} BGN`);
     }else {
         console.log("You cannot get a scholarship!");
     }
 */
}
demo(['350', '6.00', '410']);