// This problem was asked by Dropbox.

// Conway's Game of Life takes place on an infinite two-dimensional board of square cells. Each cell is either dead or alive, and at each tick, the following rules apply:

// Any live cell with less than two live neighbours dies.
// Any live cell with two or three live neighbours remains living.
// Any live cell with more than three live neighbours dies.
// Any dead cell with exactly three live neighbours becomes a live cell.
// A cell neighbours another cell if it is horizontally, vertically, or diagonally adjacent.

// Implement Conway's Game of Life. It should be able to be initialized with a starting list of live cell coordinates and the number of steps it should run for. Once initialized, it should print out the board state at each step. Since it's an infinite board, print out only the relevant coordinates, i.e. from the top-leftmost live cell to bottom-rightmost live cell.

// You can represent a live cell with an asterisk (*) and a dead cell with a dot (.).


let coords = [
    [1, 1],
    [2, 1],
    [3, 1],
    [0, 4],
    [0, 2],
    [0, 3]
];

function buildBoard(coords) {
    let xcoords = coords.map(function(el) { return el[0] });
    let ycoords = coords.map(function(el) { return el[1] });
    let n = Math.max(...xcoords) + 1;
    let m = Math.max(...ycoords) + 1;
    let matrix = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < m; j++) {
            row.push(0);
        }
        matrix.push(row.slice());
    }

    for (let k = 0; k < coords.length; k++) {
        matrix[coords[k][0]][coords[k][1]] = 1;
    }
    return matrix;
}

function step(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let neighbors = countNeighbors(board, [i, j]);
            // live cell
            if (board[i][j] === 1) {
                if (neighbors < 2) {
                    board[i][j] = 0;
                } else if (neighbors === 2 || neighbors === 3) {
                    continue;
                } else if (neighbors > 3) {
                    board[i][j] = 0;
                }
            }
            // dead cell
            if (board[i][j] === 0) {
                if (neighbors === 3) {
                    board[i][j] = 1;
                }
            }
        }
    }
}

function countNeighbors(board, coord) {
    let w = board.length;
    let h = board[0].length;

    // left
    let left = coord[0] > 0 ? board[coord[0] - 1][coord[1]] : 0;

    // top left
    let topLeft = coord[0] > 0 && coord[1] > 0 ? board[coord[0] - 1][coord[1] - 1] : 0;

    // top
    let top = coord[1] > 0 ? board[coord[0]][coord[1] - 1] : 0;

    // top right
    let topRight = coord[0] + 1 < w && coord[1] + 1 < h ? board[coord[0] + 1][coord[1] + 1] : 0;

    // right
    let right = coord[0] + 1 < w ? board[coord[0] + 1][coord[1]] : 0;

    // bottom right
    let bottomRight = coord[0] + 1 < w && coord[1] > 0 ? board[coord[0] + 1][coord[1] - 1] : 0

    // bottom
    let bottom = coord[1] + 1 < h ? board[coord[0]][coord[1] + 1] : 0;

    // bottom left
    let bottomLeft = coord[0] > 0 && coord[1] + 1 < h ? board[coord[0] - 1][coord[1] + 1] : 0;

    let neighbors = left + topLeft + top + topRight + right + bottomRight + bottom + bottomLeft;
    return neighbors;
}

function conway(coords, steps) {
    let board = buildBoard(coords);
    console.log(board);
    console.log('==================');
    for (let i = 0; i < steps; i++) {
        step(board);
        console.log(board);
    }
    return;
}

conway(coords, 5);