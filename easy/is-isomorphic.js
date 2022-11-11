/**
 * Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 */
const isIsomorphic = (s, t) => {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            if (map.get(s[i]) !== t[i]) return false;
        } else {
            if ([...map.values()].includes(t[i])) return false;
            map.set(s[i], t[i]);
        }
    }
    return true;
}