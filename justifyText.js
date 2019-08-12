// This problem was asked by Palantir.

// Write an algorithm to justify text. Given a sequence of words and an integer line length k, return a list of strings which represents each line, fully justified.

// More specifically, you should have as many words as possible in each line. There should be at least one space between each word. Pad extra spaces when necessary so that each line has exactly length k. Spaces should be distributed as equally as possible, with the extra spaces, if any, distributed starting from the left.

// If you can only fit one word on a line, then you should pad the right-hand side with spaces.

// Each word is guaranteed not to be longer than k.

// For example, given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, you should return the following:

// ["the  quick brown", # 1 extra space on the left
// "fox  jumps  over", # 2 extra spaces distributed evenly
// "the   lazy   dog"] # 4 extra spaces distributed evenly

function justifyText(strArr, k) {
    var results = [];
    // separate list of words into lines
    var current = [];
    for (var i = 0; i < strArr.length; i++) {

        if ((current.join(" ") + strArr[i]).length > k) {
            results.push(current.join(" "));
            current = [strArr[i]];
        } else {
            current.push(strArr[i]);
        }
    }
    results.push(current.join(" "));

    for (var j = 0; j < results.length - 1; j++) {
        // don't need to justify last line
        if (results[j].length != k) {
            var line = results[j];
            var spacesToAdd = k - line.length;
            while (spacesToAdd > 0) {
                // console.log(spacesToAdd);

                // console.log(line, line.length, line.indexOf(" "));
                if (line.indexOf(" ") === -1) { // if there is no space in the line, break
                    break;
                }
                for (var x = 0; x < line.length; x++) {
                    if (spacesToAdd === 0) {
                        break;
                    } else {
                        if (line[x] === " " && line[x + 1] !== " ") {
                            line = insertChar(line, x, " ");
                            results[j] = line;
                            x++;
                            spacesToAdd--;
                        }
                    }
                }
            }
        }

    }
    return results;
}

function insertChar(str, index, char) {
    return str.slice(0, index) + char + str.slice(index);

}

// var list = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
var list = `This problem was asked by Palantir.
Write an algorithm to justify text. Given a sequence of words and an integer line length k, return a list of strings which represents each line, fully justified.
More specifically, you should have as many words as possible in each line. There should be at least one space between each word. Pad extra spaces when necessary so that each line has exactly length k. Spaces should be distributed as equally as possible, with the extra spaces, if any, distributed starting from the left.
If you can only fit one word on a line, then you should pad the right-hand side with spaces.
Each word is guaranteed not to be longer than k.
For example, given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, you should return the following:
["the  quick brown", # 1 extra space on the left"fox  jumps  over", # 2 extra spaces distributed evenly"the   lazy   dog"] # 4 extra spaces distributed evenly"
`.split(" ");

function logJustifiedText(results) {
	console.log("=====");
    for (var q = 0; q < results.length; q++) {
        console.log(results[q]);
    }
}

logJustifiedText(justifyText(list, 5));
logJustifiedText(justifyText(list, 16));
logJustifiedText(justifyText(list, 20))
logJustifiedText(justifyText(list, 30));

// console.log(insertChar("test", 2, " "));