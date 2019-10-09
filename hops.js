// This problem was asked by Pinterest.

// Given an integer list where each number represents the number of hops you can make, determine whether you can reach to the last index starting at index 0.

// For example, [2, 0, 1, 0] returns True while [1, 1, 0, 1] returns False.

function hops(arr) {
var current = 0;
var flag = false;
	while (current !== arr.length - 1) {
		current += arr[current];
		if (current === arr.length - 1) {
			return true;
		} else if (current === current + arr[current]) {
			return false;
		}
	}
}

var arr1 = [2,0,1,0];
var arr2 = [1,1,0,1];
var arr3 = [3,0,1,4,2,1,4,3,0,0,0];


// tests
console.log(hops(arr1) === true);
console.log(hops(arr2) === false);
console.log(hops(arr3) === true);