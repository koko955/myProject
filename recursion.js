 function recursion(a, b) {
    let result = 1;
    for ( i = a; a > b; a--) {
        result *= a;
    }
    console.log(result.toFixed(2))
}
recursion(5,2);