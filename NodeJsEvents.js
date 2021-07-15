const EventEmitter = require('events'); // to import the event module 

class MyEmitter extends EventEmitter {} // we have created a classs named MyEmitter 

const myEmitter = new MyEmitter(); //we created a constant named myEmitter and assigned the class MyEmitter to the same
myEmitter.on('CookedChicken', () => { // we have created an event which if triggered the task present inside the curly braces will happen
  console.log('Turn off the oven the Chicken has been cooked ');
  setTimeout(() => {
      console.log("The chicken is ready pleas turn off the oven ")
      
  }, 3000);
  setTimeout(() => {
      console.log("Your food is going to be overcooked tonight!")
  }, 6000);
}); // this will not run until and unless its being emitted
console.log("if this is printing that means the program is running"); // to test if the program is still working 
myEmitter.emit('CookedChicken'); // to emit the event which is waiting to be listened 