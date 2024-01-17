let pluralNoun = "dogs" ;
let name = "Shrek";
let verb = "play";
let adjective = "strong";
let color = "green";

//console.log("JavaScript provides a "+ color +" collection of tools — including " + adjective + " syntax and " + pluralNoun + " — that allows "+ name +" to "+ verb +" with strings.")

//Step 1 - I ran and debugged the code as-is to get ahead of any potential errors in the provided code
//Next, I declared and initialized the variables above and ran and debugged the code again, confirming it runs successfully and as expected. Printed to the console as expected.

//Third, I will replace the tedious string concatenation with template literals for readability and efficiency's sake.

console.log(`JavaScript provides a ${color} colletion of tools - including ${adjective} syntax and ${pluralNoun} - that allows ${name} to ${verb} with strings.`);
