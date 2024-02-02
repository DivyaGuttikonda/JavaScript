//first common multplies of 3&6 

let n = 0;
for(let i = 1;i<=100;i++){
    if(i%3 == 0 && i%6 == 0)
    {
    console.log(i);
    n++;
    if(n==6)
    break;
    }
}