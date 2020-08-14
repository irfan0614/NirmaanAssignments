//////////// With object literal ////////////////////
var person = { id: 1, name: "Irfan" };
console.log(person);
var salaryProperty = { value: 10000, writable: true, enumerable: true, configurable: false };
Object.defineProperty(person, "Salary", salaryProperty);
console.log(person);
person.Salary = 15000;
console.log(person);


//////////// With Function ////////////////////
function Emp(id, name) {
    Object.defineProperty(this, "id", { value: id, writable: true, enumerable: true, configurable: false });
    Object.defineProperty(this, "name", { value: name, writable: true, enumerable: true });
}

var obj = new Emp(1, "Irfan");
obj.name = "Khan";
obj.id = 8;
console.log(obj);


//////////// With Class ////////////////////
class Company {
    constructor(id, name) {
        Object.defineProperty(this, "id", { value: id, writable: true, enumerable: true, configurable: false });
        Object.defineProperty(this, "name", { value: name, writable: true, enumerable: true });
    }
}

var CompanyObj = new Emp(1, "Salman");
CompanyObj.name = "Khan";
CompanyObj.id = 8;
console.log(CompanyObj);