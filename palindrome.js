function palindrome(num) {

    for (let el of num) {
        let numberTostr = el.toString();
        let reversed = numberTostr.split('').reverse().join('')

        if (numberTostr === reversed) {
            console.log(true)
        } else {
            console.log(false)
        }



    }



}
palindrome([323]);
palindrome([121])
palindrome([111])