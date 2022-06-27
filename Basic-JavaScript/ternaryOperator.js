// condition : statement-if-true : statement-if-false

function checkEqual(a,b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

function checkEqualTer(a,b) {
    return a == b ? true : false;
    // could also be written as     return a === b;


}

checkEqual(1,2)
checkEqualTer(3,4)

function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(0));