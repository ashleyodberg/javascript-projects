/*function hello(name) { //takes a single argument representing person's name
   if (name === undefined)
       name = "World";

   return "Hello, " + name + "!"; //and returns a string greeting that person
} //if the hello function is called w/o an argument, it will return "Hello, World!"

module.exports = hello; //to use this function outside of hello.js, we export the function*/

function hello(name) {
  if (name === undefined) name = "World";
  return "Hello, " + name + "!";
}

module.exports = hello;