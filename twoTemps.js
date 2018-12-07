// J White 
// 12/05/2018
// Goal -- // Given two temperatures, return true if one is less than 0 and the other is
// greater than 100.
// icyHot(120, -1) → true
// icyHot(-1, 120) → true
// icyHot(2, 120) → false 

var temp1;      // variable to hold the first temperature entered
var temp2;      // variable to hold the second temperature entered

function twoTemps(temp1, temp2) // puts in the temperatures entered into the function
{
   // checks the temperature to see if one is less than 0 and the other is
   // greater than 100. Then prints out information and if the temperatures fit the requirements
   if ((temp1 < 0 || temp1 > 100) && (temp2 < 0 || temp2 > 100)) // (temp1 < 0 || temp1 > 100) WORKING!!
   {
       console.log("True! " + temp1 + "," + temp2);
   }
    else
   {
       console.log("False! " + temp1 + "," + temp2);
   }
 
} // EOF

// Test Runs
twoTemps(20,20);
twoTemps(0,-1);
twoTemps(-20,20);
twoTemps(-1,-100);
twoTemps(120, -1);
twoTemps(-1, 120);
twoTemps(2, 120);