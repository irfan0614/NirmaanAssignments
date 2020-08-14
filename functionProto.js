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

var eich = new Emp(1, "Irfan");
var marc = new Emp(2, "Khan");

console.log(eich);
console.log(eich.count);
console.log(Emp.count);
console.log(eich.count1);
eich.print();
marc.print();
eich.commonPrint();
marc.commonPrint();
