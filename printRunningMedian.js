// This problem was asked by Microsoft.

// Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.

// Recall that the median of an even-numbered list is the average of the two middle numbers.

// For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:

// 2
// 1.5
// 2
// 3.5
// 2
// 2
// 2

function getMedian(arr) {
	if (!arr.length) {
		return null;
	}
	if (arr.length === 1) {
		return arr[0];
	}

	var sorted = arr.sort(function(a,b) {return a-b});
	var midIndex = (sorted.length / 2) - .5;
	// console.log('INDEX', sorted, midIndex);
	if (midIndex % 1) {
		return (sorted[Math.floor(midIndex)] + sorted[Math.ceil(midIndex)]) / 2;
	} else {
		return sorted[midIndex];
	}
}

function printRunningMedian(arr) {
	var subArr = [];
    for (var i = 0; i < arr.length; i++) {
    	subArr.push(arr[i]);
    	// console.log(subArr);
    	console.log(getMedian(subArr));
    }

}

var arr = [2, 1, 5, 7, 2, 0, 5];

printRunningMedian(arr);