var balanced = function(root) {
  // checks to see if a tree is height-balanced.
  // distance from all leaf nodes to the root differ no more than 1.
  var min = Infinity;
  var max = 0;
  
  // use DFS to get to each leaf node
  
  var recurse = function(node, depth) {
    // base case
    if (!node.children.length) {
      if (depth < min) {
        min = depth;
      }
      if (depth > max) {
        max = depth;
      }
      return;
    }
    
    // recursive case
    node.children.forEach(function(child) {
      recurse(child, depth+1);
    });
  }
  
  recurse(root, 0);
  return Math.abs(max - min) <= 1;
}

// construct the tree

var TreeNode = function(value) {
  this.value = value;
  this.children = [];
};

TreeNode.prototype.addChildren = function(arr) {
  this.children = this.children.concat(arr);
}

var node1 = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(3);
var node4 = new TreeNode(4);
var node5 = new TreeNode(5);
var node6 = new TreeNode(6);
var node7 = new TreeNode(7);

node1.addChildren([node2, node3]);
node2.addChildren([node4, node5]);
node3.addChildren([node6, node7]);

// balanced tree
//      1
//   2      3
// 4   5  6   7

//tests
console.log(balanced(node1) === true);

// better solution, assuming the tree is a binary tree

var maxDepth = function(rootNode) {
  if (rootNode === null) {
    return 0;
  }
  return 1 + Math.max(rootNode.left, rootNode.right);
}

var minDepth = function(rootNode) {
  if (rootNode === null) {
    return 0;
  }
    return 1 + Math.min(rootNode.left, rootNode.right);

}
var balancedBinary = function(rootNode) {
  return Math.abs(maxDepth(rootNode) - minDepth(rootNode)) <= 1;
}