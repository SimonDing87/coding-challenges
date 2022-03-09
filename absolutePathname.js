// This problem was asked by Quora.

// Given an absolute pathname that may have . or .. as part of it, return the shortest standardized path.

// For example, given "/usr/bin/../bin/./scripts/../", return "/usr/bin/".

function absPath(str) {
	let arr = str.split("/");
	let i = arr.indexOf("..");
	while (i !== -1) {
		arr.splice(i - 1, 2);
		i = arr.indexOf("..");
	}

	let j = arr.indexOf(".");
	while (j !== -1) {
		arr.splice(j, 1);
		j = arr.indexOf(".");
	}
	return arr.join("/");
}

let str = "/usr/bin/../bin/./scripts/../";
console.log(absPath(str));