// This problem was asked by Dropbox.

// Given the root to a binary search tree, find the second largest node in the tree.

// define node structure
class Node {
    this.value = value;
    this.left = left;
    this.right = right;

}

// test tree 2
var node1 = new Node(7, null, null);
var node2 = new Node(6, null, null);
var node3 = new Node(5, null, null);
var node4 = new Node(4, null, null);
var node5 = new Node(3, node1, node2);
var node6 = new Node(2, node3, node4);
var node7 = new Node(1, node5, node6);

//    1
//  2   3
// 4 5 6 7

// test tree 2
var nodeA = new Node(1, null, null);
var nodeB = new Node(2, null, null);
var nodeC = new Node(3, null, null);
var nodeD = new Node(4, null, null);
var nodeE = new Node(5, nodeA, nodeB);
var nodeF = new Node(6, nodeC, nodeD);
var nodeG = new Node(7, nodeF, nodeE);
//    7
//  5   6
// 1 2 3 4

function secondLargestNode(root) {
    // traverse through binary tree storing the maximum and second maximum value until all nodes traversed.
    var currentMax = -Infinity;
    var secondMax = -Infinity;

    function traverse(node) {
        if (!node) {
            return;
        }
        if (node.value >= currentMax) {
            secondMax = currentMax;
            currentMax = node.value;
        } else if (node.value < currentMax && node.value >= secondMax) {
            secondMax = node.value;
        }
        traverse(node.left);
        traverse(node.right);

    }
    traverse(root);
    console.log(currentMax, secondMax);
    return secondMax;
}

// tests
console.log(secondLargestNode(node7) === 6);
console.log(secondLargestNode(nodeG) === 6);