function fizzBuzz ()
{
    var count = 1;

    for (i = 0; i < 100; i++) 
    {
        if (count % 3 === 0 && count % 5 === 0)
        {
           console.log("FizzBuzz");
           count++;
        }
        else if (count % 3 === 0)
        {
           console.log("Fizz");
           count++;
        } 
        else if (count % 5 === 0)
        //(count % 3 !== 0 && count % 5 === 0)
        {
           console.log("Buzz");
           count++;
   
        } 
        else
        {
            console.log(count);
            count++;  
        }

    }
}

fizzBuzz();