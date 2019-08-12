// This problem was asked by Stripe.

// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.


// *Without the linear time and constant space constraint, this is trivial to do with sorting in O(n log(n)) time and linear space (constant space if in-place sorting).

function lowestMissingPositiveInteger(arr) {
    // with sorting


    // remove negative and 0 numbers
    arr = arr.filter(function(int) { return int > 0 })

    // remove duplicates
    arr = Array.from(new Set(arr));

    // sort
    arr = arr.sort(function(a, b) { return a - b })

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return i + 1;
}

//tests
console.log(lowestMissingPositiveInteger([3, 4, -1, 1]) === 2)
console.log(lowestMissingPositiveInteger([1, 2, 0]) === 3)
console.log(lowestMissingPositiveInteger([3, 4, -1, 1, 4, 5, 7, 1, 2, 3, 3, 1]) === 6);