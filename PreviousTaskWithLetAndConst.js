////////////////////// Class ////////////////////////////////////
//::1:://
class Account {
    constructor(account, name, balance) {
        this.account = account;
        this.name = name;
        this.balance = balance;
    }

    print() {
        console.log("Account is " + this.account, "Name is " + this.name, "Balance is " + this.balance);
    }
}

let obj = new Account(1, "Irfan", 50000);
let obj1 = new Account(2, "Manish", 60000);
obj.print();
obj1.print();
//::1:://
////////////////////// Class ////////////////////////////////////


////////////////////// Datatypes ////////////////////////////////////
//::2:://
// 1: Number
let n = 5; console.log("Value is " + n, "& Type is " + typeof (n));
// 2: String
let s = "Hello World"; console.log("Value is " + s, "& Type is " + typeof (s));
// 3: Boolean
let bl = true; console.log("Value is " + bl, "& Type is " + typeof (bl));
// 4 : BigInt (New Data type)
let bi = 11111111111111111111111111111111111111111111111111111111111111n;
console.log("Value is " + bi, "& Type is " + typeof (bi));
// 5 : undefined
//let u = undefined;
let u; console.log("Value is " + u, "& Type is " + typeof (u));
// 6 : null
let nl = null;
console.log("Value is " + nl);
//::2:://
////////////////////// Datatypes ////////////////////////////////////


///////////////////////////// FirstJS//////////////////////////////////
//::3:://
let blank = {};
console.log(blank);

let person = { id: 1, name: "Irfan" };
console.log(person);

blank.title = "This is title";
console.log(blank);
blank.source = "Test";
console.log(blank);


person.age = 57;
console.log(person);


for (let prop of Object.getOwnPropertyNames(person))
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
//::3:://
///////////////////////////// FirstJS//////////////////////////////////


///////////////////////// Fraud Class ///////////////////////////
//::4:://
class Emp {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    print() {
        console.log(this.id, this.name);
    }
}

let obj = new Emp(1, "Irfan");
console.log(obj);
obj.print();
//::4:://
///////////////////////// Fraud Class ///////////////////////////


///////////////////// Proto ////////////////////////////////
//::5:://
let bigB = {
    name: "Amitabh",
    surname: "Bachchan"
};
console.log(bigB);

let smallB = Object.create(bigB);
console.log(smallB);
console.log(smallB.surname);
smallB.name = "Abhishek";
console.log(smallB.name);

let bayB = Object.create(smallB);
bayB.name = "Aradhya";
console.log("My Name is " + bayB.name, bayB.surname);
console.log("My Father is " + bayB.__proto__.name);
console.log("My Grand Father is " + bayB.__proto__.__proto__.name);
//::5:://
///////////////////// Proto ////////////////////////////////


/////////////////// Function ProtoType /////////////////////////////
//::6:://
function Emp(id, name) {
    this.id = id;
    this.name = name;

    this.print = function () {
        console.log("instance function");
    }

    Emp.prototype.commonPrint = function () {
        console.log("stored in prototype, once only");
    }

    Emp.count = 10;
    Emp.prototype.count1 = 100;
}

let eich = new Emp(1, "Irfan");
let marc = new Emp(2, "Khan");

console.log(eich);
console.log(eich.count);
console.log(Emp.count);
console.log(eich.count1);
eich.print();
marc.print();
eich.commonPrint();
marc.commonPrint();
//::6:://
/////////////////// Function ProtoType /////////////////////////////


//////////////////////// Lambda ////////////////////////
//::7:://
function sqr(x) {
    return x * x;
}
console.log(sqr(5));

let sqr = (x) => { return x * x };
console.log(sqr(5));

let sqr = (x) => x * x;
console.log(sqr(5));

let sqr = x => x * x;
console.log(sqr(5));

let add = (x, y) => x + y;
console.log(add(5, 7));
//::7:://
//////////////////////// Lambda ////////////////////////