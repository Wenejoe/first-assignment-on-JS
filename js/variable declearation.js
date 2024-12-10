// var
var name = 'john doe';
 console.log(nav); // john doe

// let
let name = 'john doe';
console.log(nav); // john doe
if (true) {
    let name = 'jane doe';
    console.log(nav); // jane doe
}
console.log(nav); // jane doe

//const
const name = 'john doe';
console.log(nav); // john doe
name = 'jane doe'; // type error: