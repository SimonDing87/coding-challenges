// The first 12 digits of pi are 314159265358. We can make these digits into an expression evaluating to 27182 (first 5 digits of e) as follows:

// 3141 * 5 / 9 * 26 / 5 * 3 - 5 * 8 = 27182   
// or 
// 3 + 1 - 415 * 92 + 65358 = 27182

// Notice that the order of the input digits is not changed. Operators (+,-,/, or *) are simply inserted to create the expression.  

// Write a function to take a list of numbers and a target, and return all the ways that those numbers can be formed into expressions evaluating to the target

// For example: 
// f("314159265358", 27182) should print:      

// 3 + 1 - 415 * 92 + 65358 = 27182 
// 3 * 1 + 4 * 159 + 26535 + 8 = 27182 
// 3 / 1 + 4 * 159 + 26535 + 8 = 27182 
// 3 * 14 * 15 + 9 + 26535 + 8 = 27182 
// 3141 * 5 / 9 * 26 / 5 * 3 - 5 * 8 = 27182

var checkNumber = function(numStr, target) {
  var placeOperators = function(numStr) {
    // returns array of all possible equations in string form i.e. '['1+2', '1-2', '1*2', '1/2']'
    numArr = numStr.split('');
    var outputs = [];
    var recurse = function(inputArr, startIndex) {
      for (var i = startIndex; i >= 1; i--) {
        var copy = inputArr.slice();
        for (var j = 0; j < operators.length; j++) {
          copy.splice(i, 0, operators[j]);
          outputs.push(copy.join(''));
          recurse(copy, i - 1);
          copy.splice(i, 1)
        }
      }
    }
    recurse(numArr, numArr.length - 1, 0);
    return outputs;
  }

  var equations = putOperators(numStr, operators);

  equations.forEach(function(eq) {
    // TODO: replace eval() with more accurate calculation.
    if (eval(eq) === target) {
      console.log(eq, '=', target);
    };
  })
}
