// J White
// Date: 12/05/2018
// Write a javascript program that prints all odd number between 1 to 100.

function oddNum()
{
   var amt;  //counter variable to hold count for 1 - 100 in the loop.

   for (amt = 0; amt <= 100; amt++)
   {
      if ((amt % 3) > 0)
      {
         console.log("Odd! " + amt);
      }
   }

}
oddNum();