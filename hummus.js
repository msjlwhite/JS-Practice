// Date: 12-03-/2018
// Info: Chapter 3 Functions - Hummus Example

// Original Example
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
    ingredient(5, "jalapeños", "seeded");
  };

// My example
/* var hummus = New Object
let hummus = {
    const ingredient = function(amount, unit, name) 
    {
        ingredient(1, "can", "chickpeas");
        ingredient(0.25, "cup", "tahini");
        ingredient(0.25, "cup", "lemon juice");
        ingredient(1, "clove", "garlic");
        ingredient(2, "tablespoon", "olive oil");
        ingredient(0.5, "teaspoon", "cumin");
    }
}

   */
//Ramone's Example
//created an object to hold the function
var hum1 = { 

    create : function()
    {
        hummus(1);
    },

    eat : function()
    {
        console.log("I'm eating hummus. Yum! Nice and Spicy!");
        hum1.destory;
    },

    destory : function()
    {
        console.log("All done!")
    }

};

console.log(hum1.create());
console.log(hum1.eat());
console.log(hum1.destory());
//hummus