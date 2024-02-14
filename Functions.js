function calculateAreaofRectangle(length,breadth)
{
    let area = length*breadth;
   return area;
}
let rectangleArea = calculateAreaofRectangle(45,20);
console.log(rectangleArea);


//function passing

function wishes(wish){
    return `Hii,Good Morning ${wish}`
}
let wish = "Have a nice day"
let user = wishes(wish);
console.log(user)
