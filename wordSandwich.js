//Date: 12/05/2018
//Job
/*
1 create function
2 pass two parmeters into it
3 
4 divide them by 2
5 return the word with the other word
*/

/* function wordSandwich (word1, word2)
{
   var word1 = "Charm"; // created a variable to hold the first word
   var word2 = "Blowpop"; // created a variable to hold the second word
   var half = Math.round(word2.length / 2); // created a variable to hold the length of the second word divided
                                            // two

   var text = word2.substring(0,half); // created a variable to hold the characters in the second string that
                                       // are in the first half 
   var text2 = word2.substring(half,word2.length);
   
   //console.log(Math.round(half));
   //console.log(half);
   //console.log(text);
   //console.log(text2);

   console.log(text + word1 + text2);
} */

//Option 2
function wordSandwich (word1, word2)
{
   //var word1 = "Charm"; 
   //var word2 = "Blowpop";

   //var word1 = "Snickers"; 
   //var word2 = "Bar";

   var word1 = "Pay"; 
   var word2 = "Day";

   var half;
   //var text1;
   //var text2;
   
  
   if (word1.length > word2.length) 
    {
        half = Math.round(word1.length/ 2);
        text1 = word1.substring(0,half); 
        text2 = word1.substring(half,word1.length);

        console.log(text1 + word2 + text2);

    }
    else 
    {
        half = Math.round(word2.length/ 2);
        text1 = word2.substring(0,half); 
        text2 = word2.substring(half,word2.length);

        console.log(text1 + word1 + text2);
    }
 
   
   //console.log(Math.round(half));
   //console.log(half);
   //console.log(text);
   //console.log(text2);

  // console.log(text + word1 + text2);
}
 
//Ramone's Example
//function

wordSandwich();