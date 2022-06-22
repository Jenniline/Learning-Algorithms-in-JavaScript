/** Deleting Properties in JavaScript */

var ourDog = {
    "name"  : "Camper",
    "legs"  : 4,
    "tails" : 1,
    "friends" : ["everything"],
    "bark" : "bow-wow"
};

delete ourDog.bark;

var myDog = {
    "name" : "Happy Coder",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["freeCodeCamp Campers"],
    "bark": "woof"
};

delete myDog.bark;

console.log(myDog)

/**Using objects for Lookups. Converting Switch case statements to objects in JavaScript */

function phoneticlookupObject(val) {
    var result = "";

    var  lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie" : "Chicago",
        "delta" : "Denver",
        "echo" : "Easy",
        "foxtrot" : "frank"
    };

    result = lookup[val];

    //only change code above this line

    return result;
}

console.log(phoneticlookupObject("alpha"))

function phoneticlookupSwitch(val) {
    switch (val) {
        case "alpha":
            result = "Adams"
            break;
        case "bravo":
            result = "Boston"
            break;
        case "charlie":
            result = "Chicago"
            break;
        case "delta":
            result = "Denver"
        case "echo":
            result  = "Easy"
        case "foxtrot" :
            result = "frank"
            break;
    }    
}


/** Testing Objects for Properties */

var myDog = {
    gift: "pony",
    pet: "Kitten",
    bed : "sleigh",

};

function checkObj(checkProp) {
    //Your Code Here
    
    if (myDog.hasOwnProperty(checkProp)) {
       return myDog[checkProp]  // returns the value of that property if it excist
    } else {
        return "Not Found"
    }

}

/**Accessing Nested Objects */
var myStorage = {
  "car" : {
      "inside" : {
          "glove box": "maps",
          "passenger seat" : "crumbs"

      },
      "outside": {
          "trunk" : "jack"
      }
  }
}

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log( "The Value for Glove Box is " + gloveBoxContents)

/**  */
