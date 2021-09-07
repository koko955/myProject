function demo(input) {

    let index = 0;
    let comm = input[index];
    index++;
    let totalTicket = 0;
    let countStudent = 0;
    let countStandart = 0;
    let countKids = 0;

    while (comm !== 'Finish') {
        let name = comm;
        let freeSpace = Number(input[index]);
        index++;

        let type = input[index];
        index++;
        let count = 0;
        while (type !== "End") {
            count++;
            switch(type){
                case "student":countStudent++;break;
                case "standart":countStandart++;break;
                case "kids":countKids++;break;
            }
            if(count >= freeSpace){
                break;
            }
            
            type = input[index];
            index++;
        }
        totalTicket += count;
        let res = count / freeSpace *100;
console.log(`${name} - ${res.toFixed(2)}% full.`);
        comm = input[index];
        index++;
    }
console.log(`Total tickets: ${totalTicket}`);

let totalStudent = countStudent / totalTicket*100;
console.log(`${totalStudent.toFixed(2)}% student tickets.`);

let totalStandart = countStandart/totalTicket*100;
console.log(`${totalStandart.toFixed(2)}% standard tickets.`);

let totalKids = countKids / totalTicket*100;
console.log(`${totalKids.toFixed(2)}% kids tickets.`);

}
demo(['6', '4']);