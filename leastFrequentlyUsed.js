// This problem was asked by Google.

// Implement an LFU (Least Frequently Used) cache. It should be able to be initialized with a cache size n, and contain the following methods:

// set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it should also remove the least frequently used item. If there is a tie, then the least recently used key should be removed.
// get(key): gets the value at key. If no such key exists, return null.
// Each operation should run in O(1) time.

function leastUsed(countCache) {
	var min = Infinity;
	var minKey = "";
	for (let key in countCache) {
		if (countCache[key] < min) {
			minKey = key
			min = countCache[key];
		}
	}
	return minKey;
}

function LFU(n) {
    var cache = {};
    var countCache = {};
    var lastAccessedKey = "";
    this.set = function(key, value) {
        if (Object.keys(cache).length < n) {
            cache[key] = value;
        } else {
        	let minKey = leastUsed(countCache); // this is currently O(n) time, need to improve to O(1)
        	delete cache[minKey];
        	delete countCache[minKey];
        	cache[key] = value;
        }
    }
    this.get = function(key) {
    	if (!cache[key]) {
    		return null;
    	}
    	countCache[key] ? countCache[key]++ : countCache[key] = 1;
    	lastAccessedKey = key;
    	// console.log("CURENTCOUNT", countCache);
        return cache[key];
    }
}

var test = new LFU(2);

test.set('a', 'A');
test.set('b', 'B');

console.log(test.get('a'));
console.log(test.get('a'));
console.log(test.get('a'));
console.log(test.get('b'));

test.set('c', 'C');

console.log(test.get('b'));
console.log(test.get('c'));