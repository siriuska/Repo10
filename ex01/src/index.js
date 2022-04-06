var myPet = {
    species: "Akita",
    name: "Hachiko",
    legs: 4,
    friends: ["Aida", "Elvis"]
}

function myFunction(myObj) {
    return myObj
}

console.log(myFunction(myPet));

module.exports = { myPet, myFunction };