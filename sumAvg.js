// J White
// 12/06/2018
// Goal -- Write a JavaScript program that sums all elements in array once you have the sum 
// FIND he average of the sum.

// variable to hold the array, the array sum/total and the array average.
var arrayNum = [];
var arraySum;
var arrayAvg;
var arrayMean;

arrayNum.push();
arrayNum.reduce(arraySum);

function sumAvg(arrayNum, arrayAvg, arraySum) 
{
    //var files;
    // push values into the array
    //arrayNum.push();

    // count the array length then it will become tthe array mean
    arrayMean = arrayNum.length + 1;
    console.log(arrayNum.length);

    // add each number to one another to get the sum of the numbers
    //arraySum = 
//    arrayNum.reduce(arraySum);
    console.log(arraySum);
    

    /* for (var count = 0; count <= array.length; count++)
    {
        arraySum
    } */
    // divide the mean by the sum to get the array average
    arrayAvg = arraySum / arrayMean;
    console.log(arrayAvg);
   
        // print out all the information
    
    // pop all the values of the array for another set of numbers
    for (var count = 0; count <= array.length; count++)
    {
        arrayNum.pop();
    }

    console.log(arrayNum.length);
    
}

// run the program with the following information.
sumAvg(1);