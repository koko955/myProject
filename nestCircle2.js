function demo(input) {
    let index = 0;
    index++;
    let days = Number(input[0]);
    let totalMoney = 0;
    let totalWin = 0;
    let totalLose = 0;



    for (let i = 1; i <= days; i++) {
        let comm = input[index];
        index++;
        let tempMoney = 0;
        let tempWin = 0;
        let tempLose = 0;
        while (comm !== 'Finish') {
            let sportName = comm;
            let res = input[index];
            index++;
            if (res === 'win') {
                tempMoney += 20;
                tempWin++;
            } else {
                tempLose++;
            }
            comm = input[index];
            index++;
        }
        if (tempWin > tempLose) {
            tempMoney *= 1.10;
            totalWin++
        } else {
            totalLose++;
        }
        totalMoney += tempMoney;
    }
    if(totalWin>totalLose){
        totalMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
    }else{
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
    }



}
demo([]);