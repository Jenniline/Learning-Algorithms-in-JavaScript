function minusseven() {
    return num - 7;
}

console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));


/** Understanding Undefined Value Returned from a Function */

// no return statement here
function add(sum) {
    sum += 5;
}

// no return statement here
function change(num) {
    return (num + 5) / 3;
}