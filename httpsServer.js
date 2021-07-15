
const http = require("http");

const port = process.env.PORT || 3000; // we are creating the port variable and storing the port value to be 3000

const server = http.createServer((req, res) => {
    console.log(req.url); // we can use this to print request type in the console window //add . url when you want to know the url entered in chrome 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> This is Nishant Gupta </h1> <p> we are learning https server <p>');  
}) // creating a server in which we are giving two parameters req and responce and we have aheader as well as a paragraphj 
server.listen(port, () => { 
console.log(`Server is listening on port ${port}`);
}) // we are pushing the server on the desired port 