// This problem was asked by Pinterest.

// The sequence [0, 1, ..., N] has been jumbled, and the only clue you have for its order is an array representing whether each number is larger or smaller than the last.
// Given this information, reconstruct an array that is consistent with it.
// For example, given [None, +, +, -, +], you could return [1, 2, 3, 0, 4].

function reconstruct(arr) {
    let output = [];
    // construct sorted array
    let sorted = [];
    for (let i = 0; i < arr.length; i++) {
        sorted.push(i);
    }
    // We can construct the result from two sorted arrays -- one ascending, one descending.
    // To find the number to start with, we can find the midpoint by counting the number of + or - in the array.
    // Then fill all + elements with the ascending array past the midpoint, and all - with the e array before the midpoint.

    // count number of -, use that as mid index and starting point
    let midIndex = arr.filter(function(el) { return el === "-"; }).length;
    console.log(midIndex);
    let lesserArr = sorted.slice(0, midIndex);
    let greaterArr = sorted.slice(midIndex + 1);
    console.log(lesserArr);
    console.log(greaterArr);
    output.push(midIndex);
    // console.log(sorted);
    for (let i = 1; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] === "+") {
            output.push(greaterArr.shift());
        }
        if (arr[i] === "-") {
            output.push(lesserArr.pop());
        }
        console.log(output);
    }
    return output;
}

let arr1 = ["None", "+", "-", "-", "+", "-", "+"];

reconstruct(arr1);