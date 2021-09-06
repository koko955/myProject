function demo(input) {

    let num = Number(input[0]);
    let inNum = input[1];
    let outNum = input[2];

    if (inNum === 'mm') {
        num = num / 1000;
    } else if (inNum === 'cm') {
        num = num / 100;

    } else {
        num = num ;
    }

    if (outNum === 'mm') {
        console.log((num * 1000).toFixed(3));

    } else if (outNum === 'cm') {
        console.log((num * 100).toFixed(3))
    } else if (outNum === 'm') {
        console.log(num.toFixed(3))
    } else {
        console.log(outNum);
    }

}
demo(['12', 'mm', 'm']);