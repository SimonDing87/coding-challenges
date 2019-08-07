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

var placeOperators = function(numStr) {
    // returns array of all possible equations in string form i.e. '['1+2', '1-2', '1*2', '1/2']'
    numArr = numStr.split('');
    var outputs = [];
    var operators = ['+', '-', '*', '/'];
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

var checkNumber = function(numStr, target) {
    // TODO: find places to optimize.  Currently takes too long for '314159265358'.

    var equations = placeOperators(numStr);
    var results = [];
    equations.forEach(function(eq) {
        var eqArr = equationStringToArray(eq);
        if (calculateExpression(eqArr) === target) {
            results.push(eq);
        }
    })
    if (!results.length) {
      console.log("No possible equations found");
    }
    results.forEach(function(result) {
      console.log(result, "=", target)
    })
}

var equationStringToArray = function(string) {
    // '3+1-415*92+65358' -> [3, '+', 1, '-', 415, '*', 92, '+', 65358];
    var output = [];
    var current = '';
    for (var i = 0; i < string.length; i++) {
        if (isNaN(string[i])) {
            output.push(Number(current));
            output.push(string[i]);
            current = '';
            continue;
        }
        current += string[i];
        if (i === string.length - 1) {
            output.push(current);
        }
    }
    return output;
}

var calculateExpression = function(arrayEquation) {
    // [3, '+', 1, '-', 415, '*', 92, '+', 65358] -> 27182

    var output = arrayEquation.slice();
    // prevent mutating input array by making a copy

    var multiplyAndDivide = function() {
        for (var i = 1; i < output.length - 1; i++) {
            if (output[i] === '*') {
                output[i] = output[i - 1] * output[i + 1];
                output.splice(i + 1, 1);
                output.splice(i - 1, 1);
                multiplyAndDivide();
            } else if (output[i] === '/') {
                output[i] = output[i - 1] / output[i + 1];
                output.splice(i + 1, 1);
                output.splice(i - 1, 1);
                multiplyAndDivide();
            }
        }
    }

    multiplyAndDivide();

    // add and subtract
    for (var j = 1; j < output.length - 1; j++) {
        if (output[j] === '+') {
            output[j] = output[j - 1] + output[j + 1];
            output.splice(j + 1, 1);
            output.splice(j - 1, 1);
            j = 0;
        }
        if (output[j] === '-') {
            output[j] = output[j - 1] - output[j + 1];
            output.splice(j + 1, 1);
            output.splice(j - 1, 1);
            j = 0;
        }

    }
    return output[0];
}


checkNumber("123456", 6);