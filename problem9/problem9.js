// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Follow up: Could you solve it without converting the integer to a string?
// Answer Method 1

var  isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
      return false; // Negative xbers and xbers ending in 0 can't be palindromes
    }
  
    let originalNum = x;
    let reversedNum = 0;
  
    while (x > 0) {
      reversedNum = reversedNum * 10 + x % 10;
      x = Math.floor(x / 10);
    }
  
    return originalNum === reversedNum;
  }
  
  console.log(isPalindrome(121));  // This will return true
  console.log(isPalindrome(-121)); // This will return false
  console.log(isPalindrome(10)); // This will return false
  
// Answer Method 1
var  isPalindrome = function(x){
    let result =String(x).split("").reverse().join("")
    if(Number(result) === x){
      return true
    }else{
      return false
    }
   
  }
  
  console.log(isPalindrome(121));  // This will return true
  console.log(isPalindrome(-121)); // This will return false
  console.log(isPalindrome(10)); // This will return false