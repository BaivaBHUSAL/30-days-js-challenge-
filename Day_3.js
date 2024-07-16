//Activity 1--If else statement 
//positive negative or zero
const num=22
if(num>0)
{
    console.log("Positive");
}
else if(num===0)
{
    console.log("Zero");
}
else
{
    console.log("Negative");
}
// can vote or not
let age=23;
if(age>=18)
{
    console.log("You can vote.");
}
else(
    console.log("You can't vote.")
)

//Activity 2--Nested if....else statement 
//Largest of three numbers
let a=23,b=32,c=4;
if(a>b)
{
    if(a>c)
    {
        console.log("A is greater");
    }

}
else if(b>c)
    {
        if(b>a)
        {
            console.log("B is greater");
        }
    
    }
else{
    console.log("C is greater");
}

//Activity 4--switch case
// switch case to log day based on number (1-7)

let n=3;
switch(n)
{
    case 1:
        {
            console.log("Sunday");
            break;

        }
        case 2:
            {
                console.log("Monday");
                break;
            }
            case 3:
        {
            console.log("Tuesday");
            break;
        }
        case 4:
            {
                console.log("Wednesday");
                break;
            }
            case 5:
                {
                    console.log("Thursday");
                    break;
                }
                case 6:
                    {
                        console.log("Friday");
                        break;
                    }  
                    case 7:
                        {
                            console.log("Saturday");
                            break;
                        }                             
                
    }
    var grade = 56;

    // Convert the grade to a discrete value for the switch statement
    var gradeCategory = Math.floor(grade / 10);
    
    switch (gradeCategory) {
        case 10:
        case 9:
            console.log("Your grade is A+");
            break;
        case 8:
            console.log("Your grade is A");
            break;
        case 7:
            console.log("Your grade is B+");
            break;
        case 6:
            console.log("Your grade is B");
            break;
        case 5:
            console.log("Your grade is C+");
            break;
        case 4:
            console.log("Your grade is D+");
            break;
        default:
            console.log("You're NOT GRADED");
            break;
    }

//Activity 5 --Conditional(Ternary) operator
//odd or even
const num2=43;
const oddEven=num2%2==0?"Even":"Odd";
console.log(oddEven);

//Activity 6--Combining conditions
let year=2024;
if(year%4==0 && year%100!=0 || year%400==0)
{
    console.log("Leap Year");
}
else{
    console.log("Not a Leap Year");
}