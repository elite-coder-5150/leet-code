/**
 * Given a string s, find the length of the longest
 * substring without repeating characters.
 */
const lengthOfLongestSubstring = (s) => {
  let max = 0;
  let start = 0;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.has(char) && map.get(char) >= start) {
      start = map.get(char) + 1;
    }
    map.set(char, i);
    max = Math.max(max, i - start + 1);
  }
  return max;
}