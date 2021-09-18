function demo(num, comm) {

    for (let el of comm) {
        let tokens = el.split(' ');
        if (tokens[0] === 'add') {
            let indx = Number(tokens[1]);
            let element = Number(tokens[2]);
            num.splice(indx, 0, element);
        } else if (tokens[0] === 'addMany') {
            let indx = Number(tokens[1]);
            tokens.splice(0, 2);
            let numToAdd = tokens.map(Number);
            num.splice(indx, 0, ...numToAdd);

        } else if (tokens[0] === 'contains') {
            let result = num.indexOf(Number(tokens[1]));
            console.log(result);
        } else if (tokens[0] === 'remove') {
            let indx = Number(tokens[1]);
            num.splice(indx, 1);

        } else if (tokens[0] === 'shift') {
            let poss = tokens[1];
            for (let i = 0; i < poss; i++) {
                let first = num.shift();
                num.push(first);
            }
           
        } else if (tokens[0] === 'sumPairs') {
            let newArr = [];
            if(num.length % 2!==0){
                num.push(0)
            }
            for (let i = 0; i < num.length - 1; i += 2) {
                let sum = num[i] + num[i + 1];
                newArr.push(sum)
            }
        
            num=newArr;
            
        } else if (tokens[0] === 'print') {
            console.log(`[ ${num.join(', ')} ]`);
            return;
        }
    }

}
demo([2,2,4,2,4], ['add 1 4','sumPairs','print']);