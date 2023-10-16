// Minimum Sum of Four Digit Number After Splitting Digits

// For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
// Return the minimum possible sum of new1 and new2.

// Example 1:

// Input: num = 2932
// Output: 52
// Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
// The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.

function minimumSum(num) {
  const arr = String(num).split("").sort();
  return Number(arr[0] + arr[2]) + Number(arr[1] + arr[3]);
}

console.log(minimumSum(2932));
