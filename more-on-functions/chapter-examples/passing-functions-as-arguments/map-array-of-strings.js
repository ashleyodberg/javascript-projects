let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = function (name) {
    return name.charAt(0);
}

let result = names.map(firstInitials);

console.log(result); 
console.log(firstInitials);
