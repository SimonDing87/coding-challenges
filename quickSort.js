var quickSort = function(arr, start, end) {
    var pivotIndex = end;
    console.log(arr[pivotIndex], start, end);
    var wallIndex = start;
    if (end - start < 1) {
        return;
    }
    for (var i = start; i <= end; i++) {
        if (arr[i] < arr[pivotIndex]) {
            swap(arr, i, wallIndex);
            wallIndex++;
        }
    }

    swap(arr, pivotIndex, wallIndex);
    
    console.log(arr, wallIndex);
    
    quickSort(arr, start, wallIndex-1);
    quickSort(arr, wallIndex+1, end);
    return arr;
}

var swap = function(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

var array = [5,1,6,0,2,4,3]; 

quickSort(array, 0, array.length-1); // [0,1,2,3,4,5,6]

// TODO: add more test cases