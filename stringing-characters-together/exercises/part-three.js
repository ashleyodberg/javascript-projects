//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0, 1) + language.slice(4, 5));
//combining slice x 2 with the console log statement prints JS to the console

//2. Without using slice(), use method chaining to accomplish the same thing.
let abbreviation = language.charAt(0).concat(language.charAt(4));
console.log(abbreviation); //Need to review method chaining and practice as I had to have help with this one and am still confused...

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for '${language}' is '${abbreviation}'.`); //need to practice more with bracket notation as well

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
let name = 'ashley nicholas';
let newName = name.trim().toUpperCase().replace('NICHOLAS', 'Odberg');

console.log(newName);

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.
//Had help on this one and am thoroughly confused but have this section to redo for pracice as well as finding more examples to code along with - I'm very stumped on applying the logic to answer the question / solve real problems with the concepts here
let notTitleCase = 'title case';
let words = notTitleCase.split(' ');
let titleCaseArray = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

let titleCaseString = titleCaseArray.join(' ');

console.log(titleCaseString);
