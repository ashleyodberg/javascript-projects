let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
let halveNumber = function (num) {
    return num / 2;
}
// and pass it to .map()
let halved = nums.map(halveNumber);

console.log(halved);
