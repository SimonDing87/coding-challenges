// Given a directed graph, check if a path exists between 2 nodes.

var Queue = function() {
  this._storage = [];
};

Queue.prototype.enqueue = function(item) {
  this._storage.push(item);
};
Queue.prototype.dequeue = function() {
  return this._storage.shift();
};
Queue.prototype.getLength = function() {
  return this._storage.length;
};

var checkPath = function(node1, node2) {
  // use BFS from node1 to search for node2.  If all possible nodes have been visited without finding node2, path doesnt exist.
  var queue = new Queue();
  var visited = {};
  var found = false;
  var visit = function(node) {
    visited[node.value] = true;
    if (node.value === node2.value) {
      found = true;
    }
    node.edges.forEach(function(child) {
      queue.enqueue(child);
    });
  };

  queue.enqueue(node1);
  while (queue.getLength() > 0) {
    var current = queue.dequeue();
    if (visited[current.value] !== true) {
      visit(current);
    }
    if (found) {
      // break out early if found
      return found;
    }
  }
  return found;
};

// constructing graph
var GraphNode = function(value) {
  this.value = value;
  this.edges = [];
};

var node1 = new GraphNode(1);
var node2 = new GraphNode(2);
var node3 = new GraphNode(3);
var node4 = new GraphNode(4);
var node5 = new GraphNode(5);
var node6 = new GraphNode(6);
var node7 = new GraphNode(7);

GraphNode.prototype.addEdges = function(arr) {
  this.edges = this.edges.concat(arr);
};

node1.addEdges([node2, node3]);
node2.addEdges([node4]);
node4.addEdges([node5, node6, node7]);
node6.addEdges([node7]);

//    1 --> 3    5
//    |          ^
//    v          |
//    2 -------> 4 --> 7
//               |     ^
//               v     |
//               6 ---/

// tests
console.log(checkPath(node1, node7) === true);
console.log(checkPath(node2, node1) === false);
console.log(checkPath(node1, node5) === true);