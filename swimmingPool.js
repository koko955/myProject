function demo(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let procent = Number(input[3]);
    let obem = lenght * width * height;
    let obemAll = obem * 0.001;
    let procentAll = procent * 0.01;
    let total = obemAll * (1 - procentAll);
    console.log(total);
}
demo(['105', '77', '89', '18.5']);

