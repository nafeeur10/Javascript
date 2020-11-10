/*

Find Unique Number from an Array.
For Example:

Input:
[1, 2, 2, 3, 4, 4, 5]

Output:
[1, 2, 3, 4, 5]

*/

// Answer:

let arr = [1, 2, 2, 3, 4, 4, 5];
arr = [...new Set(arr)];
console.log(arr);

