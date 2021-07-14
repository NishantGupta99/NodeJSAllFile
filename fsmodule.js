const fs = require('fs');
fs.readFile("file.txt", 'utf8',(err,data)=> { // i have used fs.read file so it will search the file and read its content in th console window 
    console.log(err, data); 
    console.log("all the data in the file has been read")
})
/*const a = fs.readFileSync("file.txt") // this is the way we will use fs is we want it to execute it before jumping gto the next line 
console.log(a.toString());
console.log(" ok now lets give sync a try ")*/

/*fs.writeFile("file2.txt", "this is where i want to try the write feature of fs ", () =>{
    console.log("i have written the data inside the new file");
})
console.log("job done");*/ // again this line will be executed before the write file module so again we will use writeFileSync
const b = fs.writeFileSync("file2.txt", "this is where i want to try the write feature of fs using sync ") // now it has written using the sync method in the file . txt 
console.log(b);
console.log("so now we have used sync in write method aswell");

