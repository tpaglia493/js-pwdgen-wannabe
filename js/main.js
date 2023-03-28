
let name = prompt("What's your name?");

let surname = prompt("what's your surname?");

let favouriteColor = prompt("what's your favourite color?");

let first = 'x'

while (isNaN(first)) {
    first = prompt("Choose any number");

    if (isNaN(first)) { alert("Must input numbers") };

    first = parseInt(first);
};

let second = "y";

while (isNaN(second)) {

    second = first;

    while (second == first) {

        second = prompt("Choose a second, different, number");

        if (isNaN(second)) { alert("Must input numbers") };

        
        
        if (second == first) { alert("Must input a different number") };
        
        second = parseInt(second);
    }

    
};

let fraction = (second / first);

console.log(` 
---------USER PROFILE---------

NAME --> ${name}

SURNAME --> ${surname}

FAVOURITE COLOR --> ${favouriteColor}


----------PASSWORD----------`)
let password = (name + surname + favouriteColor + fraction)

console.log(password);



document.getElementById("display").innerHTML = password;


