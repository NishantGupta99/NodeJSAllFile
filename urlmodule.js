const url = require('url'); // importing the url 

const myURL = new URL('https://example.org:5649'); // using this as a dummy url 
myURL.pathname = '/a/b/c'; // declares the path of the url 
myURL.search = '?d=e'; // gives me the search result 
myURL.hash = '#fgh'; // to navigate to a section of the page 

console.log(myURL);
console.log(myURL.href); // this will tell me excatly how my url is being cooked after adding all the required sections 
