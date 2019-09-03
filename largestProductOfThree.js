// This problem was asked by Facebook.

// Given a list of integers, return the largest product that can be made by multiplying any three integers.

// For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.

function largestProdutOfTwo(arr) {


}

function largestProductOfThree(arr) {
	// Find the largest product of 2, then multiple by the largest positive integer.
		if (!arr.length) {
		return null;
	}
	if (arr.length === 1) {
		return arr[0];
	}

	if (arr.length === 2) {
		return arr[0]*arr[1];
	}
	var sorted = arr.sort(function(a,b) {
		return a - b;
	});
	firstTwo = arr[0]*arr[1];
	lastTwo = arr[arr.length-1] * arr[arr.length-2];

	if (firstTwo >= lastTwo) {
		return firstTwo * arr[arr.length-1];
	} else {
		return lastTwo * arr[arr.length-3];
	}

}

var arr1 = [-10, -10, 5, 2];
var arr2 = [-13, -12, 51, 22, 3];

console.log(largestProductOfThree(arr1) === 500);
console.log(largestProductOfThree(arr2) === 3366);