function bankDetails(Name,AccountNumber,PhoneNumber,IFSCcode){
    let details = {
        Name ,AccountNumber,PhoneNumber,IFSCcode
    }
    return details;
}
let displaydetails= bankDetails("JOHN","09876543239","9987766667","SBI00987");
console.log(displaydetails)
