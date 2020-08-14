// g = 10;
// var x = 5;
// var y = 7;

// function add(x, y){
//     var c;
//     return c = x + y;
// }

// var result = add(x, y);
// console.log(result);


// function sum(){
//     var output = 0;
//     for(var i = 0; i < arguments.length; i++)
//         output += arguments[i];
//         return output;
// }

// console.log("Result 1 = " + sum(1,2,3));
// console.log("Result 2 = " + sum(1,2,3,4));
// console.log("Result 3 = " + sum(1,2,3,4,5));


// var person = {            // object literal
//     id: 1,                // Member variable
//     name: "irfan",        // or field
//     print: function () {    // Member function
//         console.log("Id is " + this.id, "Name is " + this.name);
//     }
// };
// console.log(person);
// console.log("Id is " + person.id);        // object notation
// console.log("Name is " + person.name);    // object notation
// console.log("Name is " + person['name']); // bracket notation
// person.print();                           // call object method



var blank = {};
console.log(blank);

var person = { id: 1, name: "Irfan" };
console.log(person);

blank.title = "This is title";
console.log(blank);
blank.source = "Test";
console.log(blank);


person.age = 57;
console.log(person);


for (var prop of Object.getOwnPropertyNames(person))
    console.log(prop);


function Emp(id, name) {
    this.id = id;
    this.name = name;
    this.print = function () {
        console.log(this.id, this.name);
    }
}

let test1 = new Emp(1, "Irfan1");
let test2 = new Emp(2, "khan1");
console.log(test1.id);
console.log(test1.name);
test1.print();


