function demo(input) {

    let w = Number(input[0]);
    let l = Number(input[1]);

    let cake = w * l;
    let pieces = 0;
    let comm = input[2];
    let index = 3;

    while (comm !== 'STOP') {
        pieces += Number(comm);

        if (pieces > cake) {
            break;
        }
        comm = input[index];
        index++;

    }

    if (pieces > cake) {
        console.log(`No more cake left! You need ${pieces - cake} pieces more.`);
    } else {
        console.log(`${cake - pieces} pieces are left.`);
    }

}
demo([]);