var bigB = {
    name: "Amitabh",
    surname: "Bachchan"
};
console.log(bigB);

var smallB = Object.create(bigB);
console.log(smallB);
console.log(smallB.surname);
smallB.name = "Abhishek";
console.log(smallB.name);

var bayB = Object.create(smallB);
bayB.name = "Aradhya";
console.log("My Name is " + bayB.name, bayB.surname);
console.log("My Father is " + bayB.__proto__.name);
console.log("My Grand Father is " + bayB.__proto__.__proto__.name);