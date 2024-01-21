let str = "blue";
let reversed = ""; //accumulator variable
//approach will be to loop over str, adding each subsequent character to the beginning of reersed so the first becomes the last and last becomes the first


for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
}

console.log(reversed);