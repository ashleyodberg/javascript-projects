//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];


function findMinValue(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

//Sort each array in ascending order.

function sortNumbersAscending(numbers) {
  let sortedArray = [];
  while (numbers.length > 0) {
    let minValue = findMinValue(numbers);
    sortedArray.push(minValue);
    numbers.splice(numbers.indexOf(minValue), 1);
  }
  return sortedArray;
}

//Sort each array in decending order.
function sortNumbersDescending(numbers) {
 return sortNumbersAscending(numbers).reverse();
}

console.log(sortNumbersAscending(nums1));
console.log(sortNumbersAscending(nums2));
console.log(sortNumbersAscending(nums3));

console.log(sortNumbersDescending(nums1));
console.log(sortNumbersDescending(nums2));
console.log(sortNumbersDescending(nums3));