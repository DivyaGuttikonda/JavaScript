// Arrow function without parameters
const greet = () => {
    console.log("Hello!");
    console.log("Hello World");
  };
  
  // Arrow function with parameters
  const add = (a, b) => {
    return a + b;
  };
  
  // Arrow function with implicit return
  const multiply = (a, b) => a * b;

  
  const person = {
    name: "Alice",
    sayHello: () => {
      console.log(`Hello, my name is ${this.name}`);
    },
    sayHi() {
      console.log(`Hi, my name is ${this.name}`);
    }
  };
  
  greet(); 
  console.log(add(2, 3));
  console.log(multiply(4, 5));
  person.sayHello(); 
  person.sayHi();
  console.log(typeof person);
  
