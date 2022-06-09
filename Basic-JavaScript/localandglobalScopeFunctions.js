var myGlobal = 10;
var oppsGlobal = 20;

function fun1() {
    // Assign 5 to oopsGLOBAL Here
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oppsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

//console.log(myVar) Reference Error myVar is not defined 


/** It is possible to have local and Global variables 
with thesame name in JavaScript. When you do this the local 
variable takes precedent over the global variable */

var outerWear = "T-Shirt"

function myOutfit() {
    var outerWear = "sweater";
    
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);