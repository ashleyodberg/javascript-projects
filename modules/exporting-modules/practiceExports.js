function isPalindrome(str){
    return str === str.split('').reverse().join('');
}

function evenOrOdd(num){
    if (num%2===0){
        return "Even";
    } else {
        return "Odd";
    }
}

function randomArrayElement(arr){
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
}

//module.exports = isPalindrome; //this will make the above function available to other files
module.exports = {
    isPalindrome: isPalindrome,
    evenOrOdd: evenOrOdd,
    randomArrayElement: randomArrayElement
}