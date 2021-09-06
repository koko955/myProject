function demo(input) {

    let month = input[0];
    let brNights = Number(input[1]);
    let studio = 0;
    let apartment = 0;
    let sumStudio = 0;
    let sumApartment = 0;

    switch (month) {
        case 'May':
        case 'October':
            studio = 50;
            apartment = 65;
            break;
        case 'June':
        case 'September':
            studio = 75.2;
            apartment = 68.7;
            break;
        case 'July':
        case 'August':
            studio = 76;
            apartment = 77;
            break;
    }
    if ((brNights >= 7 && month === 'May') || (brNights >= 7 && month === 'October')) {
        sumStudio = 0.05;
    } else if ((brNights >= 14 && month === 'June') || (brNights >= 14 && month === 'September')) {
        sumStudio = 0.2;
    } else if ((brNights >= 14 && month === 'May') || (brNights >= 14 && month === 'October')) {
        sumStudio = 0.3;

    }
    if (brNights >= 14) {
        sumApartment = 0.1;

    }
    let totalApartment = apartment * brNights * (1 - sumApartment);
    let totalStudio = studio * brNights * (1 - sumStudio);


    console.log(`Apartment: ${totalApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${totalStudio.toFixed(2)} lv.`)

}
demo(['May', '15'])