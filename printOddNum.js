// J White
// Date: 12/05/2018
// Write a javascript program that prints all odd number between 1 to 100.

function oddNum()
{
   var amt;  //counter variable to hold count for 1 - 100 in the loop.

   // runs a loop for the numbers 1 to 100 then prints the results.
   for (amt = 0; amt <= 100; amt++)
   {
      if ((amt % 2 === 0) && (amt % 3 > 0))
      /* (((amt % 2) < 0) && ((amt % 3) > 0)) */
      {
         // console.log("Even? " + amt);
         console.log("Odd! " + amt);
      };
   }

}

oddNum();