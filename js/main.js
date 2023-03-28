
let name = prompt("What's your name?")

let surname = prompt("what's your surname?")

let favouriteColor = prompt("what's your favourite color?")

let divider = prompt("Choose any number")

divider = parseInt(divider)

let dividend = prompt("Choose a differrent number")

dividend = parseInt(dividend)

let fraction = (dividend/divider)

console.log(` 
---------USER PROFILE---------

NAME --> ${name}

SURNAME --> ${surname}

FAVOURITE COLOR --> ${favouriteColor}


----------PASSWORD----------`)
console.log(name + surname + favouriteColor + fraction)



