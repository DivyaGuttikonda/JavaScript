//bitwise operator

let num1 = 5;   // Binary: 0101
let num2  = 3;   // Binary: 0011

// Bitwise AND (&)
let resultAnd = num1 & num2; 
console.log("Bitwise AND:", resultAnd);

// Bitwise OR (|)
let resultOr = num1 | num2;
console.log("Bitwise OR:", resultOr);

// Bitwise XOR (^)
let resultXor = num1 ^ num2;
console.log("Bitwise XOR:", resultXor);

// Bitwise NOT (~)
let resultNotNum1 = ~num1;
console.log("Bitwise NOT (num1):", resultNotNum1);

// Left Shift (<<)
let resultLeftShift = num1 << 1;
console.log("Left Shift:", resultLeftShift);

// Right Shift (>>)
let resultRightShift = num1 >> 1;
console.log("Right Shift:", resultRightShift);