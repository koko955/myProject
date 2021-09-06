function demo(input) {
    let age = Number(input[0]);
    let m = Number(input[1]);
    let price = Number(input[2]);
    let sumMoney = 0;
    let sumToys = 0;
    let money = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 1) {
            sumToys++;
        } else {
            sumMoney = sumMoney + money;
            money = money + 10;
            sumMoney--;
        }

    }
    sumMoney += sumToys * price;
 
    if(sumMoney >= m){
        console.log(`Yes! ${(sumMoney - m).toFixed(2)}`);
    }else {
       console.log(`No! ${(m-sumMoney).toFixed(2)}`);
    }


}
demo(['21','1570.98', '3'])