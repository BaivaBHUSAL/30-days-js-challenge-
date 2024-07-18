//Activity 1--Function decleration

function oddEven()
{
    var num=23;
    if(num%2==0)
    {
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}
oddEven();

function square(n)
{
return n*n;
}
console.log(square(5));

//Function Expression

const maximum=function(a,b)
{
    if(a>b)
    {
        return a;
    }
    else{
        return b;
    }
}
console.log(maximum(5,4));

const concatinate=function(a,b)
{
return a+b;
}
console.log(concatinate("baivab ","bhusal"));

//Activity 3 --Arrow Function

//sum of two number

const sum=(a,b)=>
{
    return a+b;
}
console.log(sum(3,4));

//check if string contains specific character and return a boolean value

const check=(a)=>
{
    for(let i of a)
    {
      if(i=="b")
      {
        return true;
      }
    }
    return false;
}
console.log(`Strings cantains a chareacter B:${check("baivab")}`);

//Activity 4--function parameter and default value

//here b=5 is default value
function area(a,b=5)
{
    return a*b;
}
console.log(`Area of rectangle is ${area(4)}`);

function greeting(name,age=21)
{
    console.log(`Congratulations! To Mr/Mrs ${name} to achieve this milestone at such a young age of ${age}.`);
}
greeting("baivab");