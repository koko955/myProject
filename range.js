function demo(input) {
    let day = Number(input[0]);
    let type = input[1];
    let ocenka = input[2];
    let nights = day - 1;
    let result = 0;
    
    if (type === 'room for one person') {
        result = nights * 18;
    } else if (type === 'apartment') {
        result = nights * 25;
        if (day < 10) {
            result = result * 0.7;
        }else if (day>=10 && day<=15 ){
            result = result*0.65;
        }else {
          result = result*0.5
        }
    }else {
        result = nights*35;
        if (day <10){
            result = result *0.9;
        }else if (day >=10 && day <=15){
            result=result*0.85;
    
        }else {
            result=result*0.8;
        }
    } 
if (ocenka==='positive'){
    result = result *1.25;
}else {
    result = result*0.9;
}
console.log(result.toFixed(2));
}
demo(['14', 'apartment', 'positive']);