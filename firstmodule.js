/*const addTwo = require("./secondmodule"); // this is the format we use to import in common javasccript 

addTwo(); */// calling the function we created in the other second module

// now we will be working on es6 module to that we have to change the extention yo mjs from js as the first step itself
//import  {addTwo}  from "./secondmodule.mjs"; // this is the normal way of importing in esma script 
//addTwo()
import  {addTwo as addNum}  from "./secondmodule.mjs" // this is used to store call a function as another functions 
addNum();