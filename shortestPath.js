// Defining structure for a node in social network graph
var personNode = function(name) {
  this.name = name;
  this.connections = [];
}

var Lawrence = new personNode('Lawrence');
var Esther = new personNode('Esther');
var Simon = new personNode('Simon');
var Amy = new personNode('Amy');
var Eve = new personNode('Eve');
var Bob = new personNode('Bob');

var connect = function(person1, person2) {
  person1.connections.push(person2);
  person2.connections.push(person1);
}

// constructing social network graph
connect(Simon, Esther);
connect(Esther, Eve);
connect(Esther, Lawrence);
connect(Eve, Bob);
connect(Lawrence, Bob);
connect(Lawrence, Amy);
connect(Esther, Bob);

var socialNetwork = [Simon, Esther, Lawrence, Eve, Bob, Amy];
// Simon <-> Esther <-> Lawrence <-> Amy
//              | `------. |
//             Eve <----> Bob 


// making simple queue data structure for BFS
var Queue = function() {
  this._storage = [];
};

Queue.prototype.enqueue = function(item) {
  this._storage.push(item);
}
Queue.prototype.dequeue = function(item) {
  return this._storage.shift();
}
Queue.prototype.getLength = function() {
  return this._storage.length;
}

// shortest path between two nodes
function shortest(node1, node2) {
  var visited = {};
  visited[node1.name] = 0;
  var queue = new Queue();

  // NOTE: can probably refactor check function out
  var check = function(node) {
    if (node.name === node2.name) {
      return;
    }
    // if not in this BFS layer, increment distance by 1
    visited[node.name]++;
    node.connections.forEach(function(person) {
      if (visited[person.name] === undefined) {
        visited[person.name] = Infinity;
        queue.enqueue(person);
      }
      if (visited[node.name] < visited[person.name]) {
        visited[person.name] = visited[node.name];
      }
    })
  }

  queue.enqueue(node1);
  while (queue.getLength()) {
    check(queue.dequeue());

  }
  var minDistance = visited[node2.name];
  return minDistance;
}

// Simon <-> Esther <-> Lawrence <-> Amy
//              | `------. |
//             Eve <----> Bob 


// tests
console.log(shortest(Simon, Simon) === 0);
console.log(shortest(Esther, Eve) === 1);
console.log(shortest(Simon, Bob) === 2);
console.log(shortest(Eve, Amy) === 3);
