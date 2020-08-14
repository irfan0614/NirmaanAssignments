class Account {
    constructor(accountNumber, holdersName, balance) {
        this.AccountNo = accountNumber;
        this.holdersName = holdersName;
        this.balanceance = balance;
    }
    print() {
        console.log("Hello " + this.holdersName + " Your account number is:", this.AccountNo, "& Your current balance is : Rs", this.balanceance);
    }
}
var obj = new Account(20049698157, "Irfan Khan", 5000);
obj.print();

function deposit(holdersName, amount) {
    var deposited = obj.balanceance += amount;
    console.log("You have deposited Rs " + amount + ". Your account balance is now Rs " + deposited + ".");
}


function withdraw(holdersName, amount) {
    if (amount > obj.balanceance) {
        console.log("I am sorry " + holdersName + " you do not have enough funds, the amount requested for withdraw is Rs " + amount + " which is grater than the amount you have in your account.");
    } else {
        obj.balanceance -= amount;
        console.log("You have withdrawl Rs " + amount + " from your account");
    }
}


function print(holdersName) {
    console.log("Hello " + holdersName + " Now Your account is currently has Rs " + obj.balanceance);
}

deposit(obj.holdersName, 2000);

withdraw(obj.holdersName, 5000);

print(obj.holdersName);