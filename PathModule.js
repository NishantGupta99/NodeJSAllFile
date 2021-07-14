const path = require('path');
const a1 = path.posix.basename('/tmp/myfile.html');// Returns: 'myfile.html'
const a2 = path.posix.dirname('/tmp/myfile.html'); // will return the directory of the file path given 
const a3 = path.posix.extname(__filename); // this command will tell me the extention name of the file i mention inside the ()
console.log(a1);
console.log(a2);
console.log(a3);