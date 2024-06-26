const binarySearch = require('./index');

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Search for 5:', binarySearch(sortedArray, 5)); 
console.log('Search for 10:', binarySearch(sortedArray, 10)); 
console.log('Search for 1:', binarySearch(sortedArray, 1)); 
console.log('Search for 11:', binarySearch(sortedArray, 11));