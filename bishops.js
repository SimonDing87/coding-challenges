// This problem was asked by Google.

// On our special chessboard, two bishops attack each other if they share the same diagonal. This includes bishops that have another bishop located between them, i.e. bishops can attack through pieces.

// You are given N bishops, represented as (row, column) tuples on a M by M chessboard. Write a function to count the number of pairs of bishops that attack each other. The ordering of the pair doesn't matter: (1, 2) is considered the same as (2, 1).

// For example, given M = 5 and the list of bishops:

// (0, 0)
// (1, 2)
// (2, 2)
// (4, 0)
// The board would look like this:

// [b 0 0 0 0]
// [0 0 b 0 0]
// [0 0 b 0 0]
// [0 0 0 0 0]
// [b 0 0 0 0]
// You should return 2, since bishops 1 and 3 attack each other, as well as bishops 3 and 4.


function checkCollisions(coord, coords) {
  // coord [x,y]
  let collisions = 0;
  let topLeft = coord.slice();
  let topRight = coord.slice();
  let bottomLeft = coord.slice();
  let bottomRight = coord.slice();
  let n = 5;
  let m = 5;
  let hash = {};
  for (let i = 0; i < coords.length; i++) {
    hash[coords[i]] = 0;
  }
    
    while (topLeft[0] > 0 && topLeft[1] > 0) {
      topLeft[0] = topLeft[0] - 1;
      topLeft[1] = topLeft[1] - 1;
      if (hash[topLeft] !== undefined) {
        hash[topLeft] += 1;
      }
    }

    while (topRight[0] < n - 1 && topRight[1] > 0) {
      topRight[0] = topRight[0] + 1;
      topRight[1] = topRight[1] - 1;
      if (hash[topRight] !== undefined) {
        hash[topRight] += 1;
      }
    }

    while (bottomLeft[0] > 0 && bottomLeft[1] < m - 1) {
      bottomLeft[0] = bottomLeft[0] - 1;
      bottomLeft[1] = bottomLeft[1] + 1;
      if (hash[bottomLeft] !== undefined) {
        hash[bottomLeft] += 1;
      }
    }

    while (bottomRight[0] < n - 1 && bottomRight[1] < m - 1) {
      bottomRight[0] = bottomRight[0] + 1;
      bottomRight[1] = bottomRight[1] + 1;
      if (hash[bottomRight] !== undefined) {
        hash[bottomRight] += 1;
      }
    }
  for (key in hash) {
    collisions += hash[key];
  }
  return collisions;
}

function bishops(coords) {
  let total = 0;
  for (let i = 0; i < coords.length; i++) {
    total += checkCollisions(coords[i], coords)
  }
  // divide by 2 since we're double-counting each bishop's collision
  return total / 2;
}
let coords = [[0,0], [1,2], [2,2], [4,0]];
console.log(bishops(coords));