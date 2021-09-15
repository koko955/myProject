function ascii(a, b) {

    let min = a.charCodeAt(0);
    let max = b.charCodeAt(0);

    let first = a.charCodeAt(0);
    let second = b.charCodeAt(0);

    if (first > second) {
        min = b.charCodeAt(0);
        max = a.charCodeAt(0);

    }

    let res = '';

    for (let i = min + 1; i < max; i++) {
        let char = String.fromCharCode(i);
        res += char + ' ';
    }

    return res;

}
let res = ascii('g', 'a');
console.log(res);

