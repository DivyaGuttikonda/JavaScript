const firstName = "Divya";
const secondName = " Reddy";
const job = "AS'\D\'ET";
const company = "Qu\"a\"li\\zeal";
const details = " I'm " + firstName  +  secondName + " Working as a" + job + " in " + company;
console.log(details);
let length = details.length
console.log(length)


// \'	'	Single quote
// \"	"	Double quote
// \\	\	Backslash



let x = "John";
let y = new String("John");
console.log(x)

let text = "Apple, Banana, Kiwi......   ";
let part = text.slice(7,15);
console.log(part)

let str = "Apple,Banana, Kiwi";
let part1 = str.substring(7, 2);
console.log(part1)

let string = "Apple, Banana, Kiwi";
let part2 = str.substr(7, 5);
console.log(part2)