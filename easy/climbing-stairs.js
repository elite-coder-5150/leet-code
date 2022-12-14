/**
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */
const climbStairs = (n) => {
      if (n <= 2) {
    return n;
  }
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    [first, second] = [second, first + second];
  }
  return second;
}