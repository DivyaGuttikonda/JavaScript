class details{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;

    }
    persondetails(){
        console.log(`name : ${this.name}, age : ${this.age}, gender ${this.gender}`)
    }
    incrementAge(){
        this.age++;
        console.log(`age : ${this.age}`)
    }
    
}
let person = new details("ROSIE","22","Female")
person.incrementAge();
person.persondetails();