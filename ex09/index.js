var myObj = {
    title: "Titanic",
    song: "My Heart Will Go On",
    genre: "Drama"

}

function myFunction(myObj, checkProp) {
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }

    return "Not found";
}

console.log(myFunction(myObj,"title"));
console.log(myFunction(myObj,"song"));
console.log(myFunction(myObj,"genre"));
console.log(myFunction(myObj,"actor"));
module.exports = myFunction;