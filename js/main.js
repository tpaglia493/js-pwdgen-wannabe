
let name = prompt("What's your name?");

let surname = prompt("what's your surname?");

let favouriteColor = prompt("what's your favourite color?");

let divider = 'x'

while (isNaN(divider)) {
    divider = prompt("Choose any number");

    if (isNaN(divider)) { alert("Must input numbers") };

    divider = parseInt(divider);
};

let dividend = "y";

while (isNaN(dividend)) {
    dividend = prompt("Choose a different number");

    if (isNaN(dividend)) { alert("Must input numbers") };

    dividend = parseInt(dividend);
};

let fraction = (dividend / divider);

console.log(` 
---------USER PROFILE---------

NAME --> ${name}

SURNAME --> ${surname}

FAVOURITE COLOR --> ${favouriteColor}


----------PASSWORD----------`)
let password = (name + surname + favouriteColor + fraction)

console.log(password);



document.getElementById("display").innerHTML = password;


