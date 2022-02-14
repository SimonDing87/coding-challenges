// This problem was asked by Amazon.

// Given a matrix of 1s and 0s, return the number of "islands" in the matrix. A 1 represents land and 0 represents water, so an island is a group of 1s that are neighboring whose perimeter is surrounded by water.

// For example, this matrix has 4 islands.

// 1 0 0 0 0
// 0 0 1 1 0
// 0 1 1 0 0
// 0 0 0 0 0
// 1 1 0 0 1
// 1 1 0 0 1

let matrix = [
    [1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1],
    [1, 1, 0, 0, 1]
];

//assuming only top left down right will be connection points to an island, and not the diagonal cells.

function islands(mat) {
    // init visited matrix of same size
    let visited = [];
    for (let n = 0; n < mat.length; n++) {
        let row = [];
        for (let m = 0; m < mat[0].length; m++) {
            row.push(0);
        }
        visited.push(row.slice());
    }

    let count = 0;

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] && !visited[i][j]) {
                // once see any piece of land that is not visited, increment count and mark all adjacent land as visited.
                count++;
                markAdjacentVisited(mat, visited, i, j);
            }
        }

    }
    console.log(count);
    return count;
}

function markAdjacentVisited(mat, vis, i, j) {
    // recursively check up down left right land and mark visited.
    vis[i][j] = 1;
    if (i > 0 && mat[i - 1][j] && !vis[i - 1][j]) {
        // up
        markAdjacentVisited(mat, vis, i - 1, j);
    }
    if (i < mat.length - 1 && mat[i + 1][j] && !vis[i + 1][j]) {
        // down
        markAdjacentVisited(mat, vis, i + 1, j);
    }
    if (j > 0 && mat[i][j - 1] && !vis[i][j - 1]) {
        // left
        markAdjacentVisited(mat, vis, i, j - 1);
    }
    if (j < mat.length - 1 && mat[i][j + 1] && !vis[i][j + 1]) {
        // right
        markAdjacentVisited(mat, vis, i, j + 1);
    }
}

islands(matrix); // 4