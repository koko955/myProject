function demo(input) {

    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

let firstPipe = p1*h;
let secondPipe = p2*h;
let allPipes = firstPipe+secondPipe;
let total = (firstPipe/allPipes)*100;
let total2 = (secondPipe/allPipes)*100;
let volume = (allPipes/v)*100;
if (allPipes <= v){
    console.log	(`The pool is ${volume}% full. Pipe 1: ${total.toFixed(2)}%. Pipe 2: ${total2.toFixed(2)}%.`);

}else if(allPipes >= v){
    console.log(`For ${h} hours the pool overflows with ${allPipes-v.toFixed(2)} liters."`)
}

    
}
demo(['100','100','100','2.5']);

