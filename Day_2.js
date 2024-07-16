//Activity 1 -- Arithmetic Operator
//Wap to add two number

let a=23;
let b=45;
console.log(a+b);

//subtract
console.log(b-a);

//multiply
console.log(a*b);

//divide
console.log(b/a);

//remainder
console.log(b%a);

//Assignment 2 --Operator
a+=23;
console.log(a);

b-=22;
console.log(b);

//Assignment 4 --Comparison operator
if(a>b)
{
    console.log("A is greater");
}
else if(a<b)
{
    console.log("B is greater");
}
else{
    console.log("Same");
}

let age=18;
if(age>=13)
{
    console.log("You're teenagers");
}
else if(age<=13)
{
    console.log("You're still not a teenagers");
}


if(age=="18")
{
    console.log("It dont check data type");
}

if(age==="18")
{
    console.log("Its check data types so gives error");
}

//Activity --Logocal Operator
const haveLicense=false;

if(age>=18 && haveLicense)
{
    console.log("You can drive");
}
else{
    console.log("You cant");
}

//ternary operator

let number=-23;

const result=number>=0?"positive":"negative";
console.log(result);