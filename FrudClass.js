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