// Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).
// For example, given the string "([])[]({})", you should return true.
// Given the string "([)]" or "((()", you should return false.

var dict = {
    "(": ")",
    "[": "]",
    "{": "}"
}

function balanced(str) {
  var stack = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      stack.push(str[i]);
    } else {
      var last = stack.pop();
      if (dict[last] !== str[i]) { // check if the next closing character matches the last opening character
        return false;
      }
    }
  }
  if (stack.length) { // if there are still characters in the stack, not all open elements are closed, so return false.
    return false;
  }
  return true;
}


//tests
console.log("TEST1", balanced("([])[]({})") === true);
console.log("TEST2", balanced("([)]") === false);
console.log("TEST3", balanced("((()") === false);

