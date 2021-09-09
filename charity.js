function demo(input) {
    let brDni = Number(input[0]);
    let brSladkari = Number(input[1]);
    let brCake = Number(input[2]);
    let brGofreti = Number(input[3]);
    let brPalachinki = Number(input[4]);

    let cake = brCake * 45;
    let gofreti = brGofreti * 5.80;
    let palachinki = brPalachinki * 3.20;
    let sum = (cake + gofreti + palachinki) * brSladkari
    let sumAll = sum * brDni;
    let razhod = sumAll  / 8;
    let total = sumAll - razhod;
    console.log(total);
}
demo(['23', '8', '14', '30', '16']);