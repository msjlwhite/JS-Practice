// J White
// 12/5/2018
// Question -1 
// Given 2 int values, return true if one is negative and one is positive.
// Except if the parameter "negative" is true, then return true only if both are
// negative.

// (-1, -1, true)
// posNeg(1, -1, false) → true
// posNeg(-1, 1, false) → true
// posNeg(-4, -5, true) → true

// weird looking function
/* function posNeg(num1, num2, isNeg)
{
    if (isNeg) 
    {
        console.log(num1 < 0 && num2 < 0);
    }
    else
    {
        console.log((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0));
    }
}; */

//
function posNeg(num1, num2)
{
    if ((num1 < 0 && num2 < 0) || (num1 > 0 && num2 > 0)) 
    {
        console.log("True");
    }
    else
    {
        console.log("False");
        //console.log((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0));
    }
};

// posNeg(-1,1);
posNeg(-1,-1);
// posNeg(1,1);