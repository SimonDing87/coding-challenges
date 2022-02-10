// This problem was asked by VMware.

// The skyline of a city is composed of several buildings of various widths and heights, possibly overlapping one another when viewed from a distance. We can represent the buildings using an array of (left, right, height) tuples, which tell us where on an imaginary x-axis a building begins and ends, and how tall it is. The skyline itself can be described by a list of (x, height) tuples, giving the locations at which the height visible to a distant observer changes, and each new height.

// Given an array of buildings as described above, create a function that returns the skyline.

// For example, suppose the input consists of the buildings [(0, 15, 3), (4, 11, 5), (19, 23, 4)]. In aggregate, these buildings would create a skyline that looks like the one below.

//      ______
//     |      |        ___
//  ___|      |___    |   |
// |   |   B  |   |   | C |
// | A |      | A |   |   |
// |   |      |   |   |   |
// ------------------------
// As a result, your function should return [(0, 3), (4, 5), (11, 3), (15, 0), (19, 4), (23, 0)]

function skyline(arr) {
    // construct a 1D array that shows max height at each index
    // we could initialize heights to be same length as max length of skyline, but JS allows you to insert at index outside of length, setting other elements up to that index as undefined.
    let output = [];

    let maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] > maxLength) {
            maxLength = arr[i][1];
        }
    }

    let heights = new Array(maxLength).fill(0);
    // initialize 1D height array of as 0.


    for (let i = 0; i < arr.length; i++) {
        let leftIndex = arr[i][0];
        let rightIndex = arr[i][1];
        let currentHeight = arr[i][2];
        for (let j = leftIndex; j < rightIndex; j++) {
            heights[j] ? heights[j] : heights[j] = 0;
            if (currentHeight > heights[j]) {
                heights[j] = currentHeight;
            }
        }
    }

    let current = [0, heights[0]]; // first element is going to start at index 0 and whatever height it is there.

    for (let i = 0; i < heights.length; i++) {
        if (current[1] !== heights[i]) {
            output.push([current[0], heights[i - 1]]);
            current = [i, heights[i]];
        }
    }
    output.push(current); // push last segment after loop
    output.push([heights.length, 0]); // push last segment to close skyline per provided format
    console.log(output);
    return output;
}

let arr1 = [
    [0, 15, 3],
    [4, 11, 5],
    [19, 23, 4]
];
// output: [[0, 3], [4, 5], [11, 3], [15, 0], [19, 4], [23, 0]]

skyline(arr1);