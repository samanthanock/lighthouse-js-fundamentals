var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:

var repeat = 0; //this is my while loop for var ingredients
while (repeat < 8) {
    if (repeat === 3) {
        console.log("this is important:");
}
repeat++;
}
console.log(ingredients);

for (i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i])
} //this is my for loop for var ingredients 

for (i = ingredients.length - 1; i >= 0; i--) {
    console.log(ingredients[i])
} //this is my for loop, reversed 