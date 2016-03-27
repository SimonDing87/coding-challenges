// Defining structure for a node in social network graph
var personNode = function(name) {
  this.name = name;
  this.connections = [];
  this.visited = false;
  this.distance = Infinity;
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
  node1.distance = 0;
  var queue = new Queue();

  // NOTE: can probably refactor check function out
  var check = function(node) {
    node.visited = true;
    if (node.name === node2.name) {
      return;
    }
    node.distance++;
    node.connections.forEach(function(person) {
      if (node.distance < person.distance) {
        person.distance = node.distance;
      }
      if (!person.visited) {
        queue.enqueue(person);
      }
    })

  }

  queue.enqueue(node1);
  while (queue.getLength()) {
    check(queue.dequeue());
  }
  var minDistance = node2.distance;
  init(socialNetwork);
  return minDistance;
}

// must re-initialize each person's distance to Infinity after each call
var init = function(network) {
  network.forEach(function(person) {
    person.visited = false;
    person.distance = Infinity;
  });
};

// Simon <-> Esther <-> Lawrence <-> Amy
//              | `------. |
//             Eve <----> Bob 


// tests
console.log(shortest(Simon, Simon) === 0);
console.log(shortest(Esther, Eve) === 1);
console.log(shortest(Simon, Bob) === 2);
console.log(shortest(Eve, Amy) === 3);