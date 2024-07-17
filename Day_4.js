for(let i=1;i<=10;i++)
{
    console.log(i);
}
console.log("...............................................................");

//Table of 5
for(let i=1;i<=10;i++)
{
    let multiple=5*i;
    console.log(`5 * ${i} = ${multiple}`);
}
console.log("...............................................................");

//Activity 2--While Loop
let i=0;
let sum=0;
while(i<10)
{
 sum=sum+i;
i++;
}
console.log(`The sum is ${sum}`);
console.log("...............................................................");

//print 10 to 1
let j=10
while(j>0)
{
    console.log(j);
    j--;
}
console.log("...............................................................");

//Activity 3--Do___while loop
//print 1 to 5

let a=1;
do{
    console.log(a);
    a++;
}while(a<=5);

//factorial
// let fact=5;
// let factorial=1;
// do{
//     if(fact==0)
//     {
//         factorial=1;
//     }
//     else{
// factorial=factorial*fact;
//     }
// a--;
// }while(fact>=0)
// console.log(factorial);
// console.log("..........................................................................");

//Print pattern
// *
// **
// ***
// ****
// *****

for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
        {
              console.log("*");
        } 
    console.log("\n");
}

for(let i=1;i<=10;i++)
{
    if(i=5)
    {
        continue;
    }
    console.log(i);
}