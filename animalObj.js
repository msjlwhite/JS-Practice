// J. White
// 12.12.2018
//


//global variables
var isFull = false;
var isAwake = false;

// all animal methods
function sleep(time)
{
    var howLongSleep = time;
    
    for (i = 0; i < howLongSleep; i++)
    {
        console.log("I'm sleeping for " + howLongSleep + " hours. Don't wake me up!");
    }
    console.log("Wheeee wee --- zoowee momma, I'm awake!")
    console.log(isAwake)
}

function eat(amount)
{
    var howMuchFood = amount;
    if (howMuchFood > 2)
    {
        isFull = true;
    }
    console.log("I'm eating " + howMuchFood + " lbs of food. Back off." +
                " Are you full? " + isFull);

}

function jump(howHigh, howLong)
{
    console.log("You're jumping " + howHigh + " ft high for " + howLong + "mins.")

}

/* function(herb)
{

} */

//Types o = Onmi; c = Carni; h = Herbi
function hunt(type)
{
    var fType = type.toLowerCase();
    switch (fType)
    {
        case "o": console.log("Dang son you eating both!")
        break;

        case "c": console.log("How's your steak?")
        break;

        case "h": console.log("Dang son you eating both!")
        break;

        default:
        console.log("Hunting Season is over!!") 

    }
 
}

function run (speed, distance)
{
    //spead * time
    var howFar = distance;
    var howFast = speed;
 //   var amt;
    console.log ("You are going " + howFast + " per hour." + " You have travelled " + distance + " miles.")

}

function mate (mated)
{
    //var mated = true;
    //var single = mated.toLowerCase();
    var babies = Math.round(Math.floor(Math.random() * 100));
    var noBabies = 0;

    switch (mated)
    {
        // case true: console.log("You're in a committed and loving relationship. You have " + babies
        // +  " babies!")
        // break;
        // default:
        //  console.log("You are single and ready to mingle! You have " + noBabies + " yet")


       case false: console.log("You are single and ready to mingle! You have " + noBabies + " babies yet!")
        break;
        default: console.log("You're in a committed and loving relationship. You have " + babies
        +  " babies!")

    }
}

//calling all methods
//sleep(5);
//eat(3);
//hunt("o");
//hunt("1");
//hunt("@");
//run (1,1);
mate(true);
mate(false);