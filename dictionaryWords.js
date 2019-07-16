// Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

// For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

// Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].

function dictionaryWords(str, dict) {
	arr = [];
	var startIndex = 0;
	var currentSubString = "";
	for (var i = 1; i <= str.length; i++) {
		currentSubstring = str.substring(startIndex, i);
		if (dict[currentSubstring]) {
			arr.push(currentSubstring);
			startIndex = i;
		}
	}
	return arr;
}

var dict = {
    "quick": 1,
    "brown": 1,
    "the": 1,
    "fox": 1,
    "bed": 1,
    "bath": 1,
    "bedbath": 1,
    "and": 1,
    "beyond": 1
}

var str1 = "thequickbrownfox";
var str2 = "bedbathandbeyond";

console.log(dictionaryWords(str1, dict));
console.log(dictionaryWords(str2, dict));