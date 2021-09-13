function demo(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let rabotnici = Number(input[3]);
    let day = Number(input[3]);
let allGrapes= x*y;
let vino = (0.4*allGrapes)/2.5;
let nedostig = Math.abs(vino - z);
let literPerperson = nedostig/rabotnici;
if(vino >= z){
    console.log(`Good harvest this year! Total wine: ${vino} liters.`);
    console.log(`${Math.ceil(nedostig)} liters left -> ${Math.ceil(literPerperson)} liters per person.`);
}else if (vino < z){
    console.log(`It will be a tough winter! More ${Math.trunc(nedostig)} liters wine needed.`);
}

}

demo(['1020','1.5','425','4']);

