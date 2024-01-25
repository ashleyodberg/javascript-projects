function sayHello() {
   console.log("Hello, World!");
}

sayHello();

//What does the function below return to the console? 

function plusTwo(num) {
    return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
    a = plusTwo(a);
}

console.log(a);