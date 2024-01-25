let message = "Hello, World!";

function printMessage() {
   console.log(message);
}

printMessage();
message = "Goodbye";
printMessage();

/*function sayHello() {
   console.log("Hello, World!");
}

sayHello();*/

let num = 42;

function isEven (num) { 
    return num % 2 === 0; 
}

console.log(isEven(43));
