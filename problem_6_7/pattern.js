// Rectangle Pattern
function rectPattern(row, column) {
  let start = "";
  for (let i = 0; i <= row; i++) {
    for (let j = 0; j <= column; j++) {
      start += "*";
    }
    start += "\n";
  }
  return start;
}
console.log(rectPattern(5, 4));

// Hollow Rectangle Pattern
function hollowPattern(row, column) {
  let start = "";
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= column; j++) {
      if (j == 1 || j == column) {
        start += "*";
      } else if (i == 1 || i == row) {
        start += "*";
      } else {
        start += " ";
      }
    }
    start += "\n";
  }
  return start;
}
console.log(hollowPattern(5, 4));


// Inverted Half Pyramid Pattern
function halfPyramidPat(initial) {
  let start = "";
  for (let i = initial; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      start += "*";
    }
    start += "\n";
  }
  return start;
}
console.log(halfPyramidPat(5));