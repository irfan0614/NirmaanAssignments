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
