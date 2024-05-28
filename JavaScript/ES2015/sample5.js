#!/usr/bin/node
const arr = ['a','b'];
const arr2 = ['c', 'b'];
const string = 'Hello';
const combi = [...arr, ...arr2, ...string];

console.log(combi);
