function ages(num){
    let  numAsString = num.toString(); 
    let sum = 0;
    for(let digit of numAsString){
        sum+=Number(digit)
    }
        
    
    
    console.log(sum)
    
    
    }
    ages(267)