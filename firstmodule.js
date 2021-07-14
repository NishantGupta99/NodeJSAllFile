/*const addTwo = require("./secondmodule"); // this is the format we use to import in common javasccript 

addTwo(); */// calling the function we created in the other second module

// now we will be working on es6 module to that we have to change the extention yo mjs from js as the first step itself
//import  {addTwo}  from "./secondmodule.mjs"; // this is the normal way of importing in esma script 
//addTwo()
//import  {addTwo as addNum}  from "./secondmodule.mjs" // this is used to store call a function as another functions 
addNum();
//import  {addTwo, addNum}  from "./secondmodule.mjs" // to call multiple function at once 
import  * as add  from "./secondmodule.mjs" //this is used to import all the functions from the export group and store it in the function add
console.log(add());