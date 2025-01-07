function validator(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Input must be a non-negative integer");
  }
}

// Implementation 1: Arithmetic sequence sum formula: n(n+1)/2
var sum_to_n_a = function (n) {
  validator(n);
  return (n * (n + 1)) / 2;
};

// Implementation 2: Iteration
var sum_to_n_b = function (n) {
  validator(n);
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// Implementation 3: Recursion
var sum_to_n_c = function (n) {
  validator(n);
  if (n === 1) return 1;
  return n + sum_to_n_c(n - 1);
};

// Test cases
const testCases = [5, 10, 100, -1];
for (const n of testCases) {
  console.log(`Testing n = ${n}:`);
  console.log(`Mathematical: ${sum_to_n_a(n)}`);
  console.log(`Iterative: ${sum_to_n_b(n)}`);
  console.log(`Recursive: ${sum_to_n_c(n)}`);
  console.log("---");
}
