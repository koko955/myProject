function calc(a,b,operator) {
 let sum = '';

        if (operator === 'add') {
            sum = a+b;
        } else if (operator === 'subtract') {
             sum = a-b;
        } else if (operator === 'divide') {
            sum = a/b;
        } else if (operator === 'multiply') {
            sum = a*b;
        }
    
    
    
    
        console.log(` ${sum}`)
    }
    calc(5, 5, 'multiply' );
    calc(5, 5, 'add' );
    calc(5, 5, 'divide' );
    calc(5, 5, 'subtract' );