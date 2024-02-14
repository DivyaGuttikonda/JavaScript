class bankDetails{
    constructor(accountNumber,accountHolder,balance){
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    displaydetails() {
        console.log(`AccountNumber : ${this.accountNumber}, AccountHolder : ${this.accountHolder}, Balance : ${this.balance}`)
    }
}
  let details = new bankDetails('098765432','ROSIE','98765432345'); 
  details.displaydetails();