function mergeSort (arr) {    
  if (arr.length < 2) {
    return arr;
  }
  var mid = Math.floor(arr.length/2);
  var subLeft = mergeSort(arr.slice(0, mid));
  var subRight = mergeSort(arr.slice(mid));
  return merge(subLeft, subRight);
}

function merge (sorted1,sorted2) {
  var result = [];
  while (sorted1.length > 0 && sorted2.length > 0) {
    if (sorted1[0] < sorted2[0]) {
        result.push(sorted1.shift());
    } else {
        result.push(sorted2.shift());
    }
  }
  if (sorted1.length) {
      return result.concat(sorted1);
  } else {
      return result.concat(sorted2);
  }
}