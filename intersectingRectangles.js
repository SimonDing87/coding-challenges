// Given two rectangles on a 2D graph, return the area of their intersection. If the rectangles don't intersect, return 0.

// For example, given the following rectangles:

// {
//     "top_left": (1, 4),
//     "dimensions": (3, 3) # width, height
// }
// and

// {
//     "top_left": (0, 5),
//     "dimensions": (4, 3) # width, height
// }
// return 6.

function intersectingRectangles(rect1, rect2) {
    let x1 = rect1.top_left[0];
    let y1 = rect1.top_left[1];

    let x2 = rect2.top_left[0];
    let y2 = rect2.top_left[1];

    let x1End = x1 + rect1.dimensions[0];
    let x2End = x2 + rect2.dimensions[0];

    let y1End = y1 + rect1.dimensions[1];
    let y2End = y2 + rect2.dimensions[1];

    // console.log("x1", x1, x1End);
    // console.log("X2" ,x2, x2End);

    // console.log("y1", y1, y1End);
    // console.log("y2" ,y2, y2End);

    // find intersects by taking the max of the two starting coords, and min of the end coords.
    let startXIntersect = Math.max(x1, x2);
    let endXIntersect = Math.min(x1End, x2End);

    let startYIntersect = Math.max(y1, y2);
    let endYIntersect = Math.min(y1End, y2End);

    // console.log(startXIntersect, endXIntersect);
    // console.log(startYIntersect, endYIntersect);

    let area = (endXIntersect - startXIntersect) * (endYIntersect - startYIntersect);
    console.log(area);
    return area;
}


var rect1 = {
    "top_left": [1, 4],
    "dimensions": [3, 3] // width, height
}
var rect2 = {
    "top_left": [0, 5],
    "dimensions": [4, 3] // width, height
}


intersectingRectangles(rect1, rect2);