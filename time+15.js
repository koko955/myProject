function demo(input) {

    let hour = Number(input[0]);
    let minutes = Number(input[1]) + 15;


    if (hour >= 24) {
        hour = hour - 24;
    }
    if (minutes >= 60) {
        hour = hour + 1;
        minutes = minutes - 60;
    }
    if (minutes < 10) {
        console.log(`${hour}:0${minutes}`);
    } else {
        console.log(`${hour}:${minutes}`);
    }
}
demo(['1', '46']);




