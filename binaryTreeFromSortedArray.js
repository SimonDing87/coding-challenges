// Given sorted array, construct binary tree
var sorted = [1, 2, 3, 4, 5, 6, 7];

var binaryNode = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};


var treeFromArray = function(sortedArray) {

  var rootNode = new binaryNode(null);

  var recurse = function(array, currentNode) {
    if (array.length === 0) {
      currentNode.value = null;
      return;
    }
    var midIndex = Math.floor(array.length / 2); // right favored mid
    var mid = array[midIndex];
    currentNode.value = mid;
    currentNode.left = new binaryNode(null);
    currentNode.right = new binaryNode(null);

    var leftArray = array.slice(0, midIndex);
    var rightArray = array.slice(midIndex + 1);

    recurse(leftArray, currentNode.left)
    recurse(rightArray, currentNode.right)

  };

  recurse(sortedArray, rootNode);
  return rootNode;
};


var tree = treeFromArray(sorted);

//      4
//   2     6
// 1   3 5   7  

// tests
console.log(tree.left.left.value === 1);
console.log(tree.left.value === 2);
console.log(tree.left.right.value === 3);
console.log(tree.value === 4);
console.log(tree.right.left.value === 5);
console.log(tree.right.value === 6);
console.log(tree.right.right.value === 7);
