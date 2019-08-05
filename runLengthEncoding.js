// This problem was asked by Amazon.

// Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

// Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid

function runLengthEncoding(str) {
	var count = 1;
	var strArr = [];
	for (var i = 0; i < str.length; i++) {
		if (str[i] === str[i+1]) {
			count++;
		} else {
			strArr.push(count + str[i]);
			count = 1;
		}
	}
	return strArr.join("");
}

console.log(runLengthEncoding("AAAABBBCCDAA") === "4A3B2C1D2A");
console.log(runLengthEncoding("aaAAAaaBBbbaaaDDddCcCCC") === "2a3A2a2B2b3a2D2d1C1c3C");