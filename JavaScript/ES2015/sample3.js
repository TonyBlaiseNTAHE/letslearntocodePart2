#!/usr/bin/node
function add( x, y, z) {
	return x+y+z;
}
const arr = [1, 4, 5];
console.log(add(...arr));
