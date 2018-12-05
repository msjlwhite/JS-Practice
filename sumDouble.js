// J White
// 12/5/2018
// Question 2 

// Given two int values, return their sum. Unless the two values are the same,
// then return double their sum.
// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8


//
function sumDouble(num1, num2)
{
    var num1;
    var num2;
    var sum;

    if (num1 == num2) 
    {
        sum = ((num1 + num2) * 2);
        console.log(sum);
    }
    else
    {
        sum = num1 + num2;
        console.log(sum);
    }
};

// sumDouble(1,2);
sumDouble(2,2);
// sumDouble(4,4);
