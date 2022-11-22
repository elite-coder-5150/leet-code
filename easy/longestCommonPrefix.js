/**
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

*/
const longestCommonPrefix = (strs) => {
    if (strs.length === 0) {
        return '';
    }
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === '') {
                return '';
            }
        }
    }
    return prefix;
};

//! This is what makes VSCode batter then webstorm. I can define function my own way
//! Webstorm would have a fit with this code. :)
// TODO: 
class solution {
    longestCommonPrefix(strs) {
        if (strs.length === 0)
            return '';

        let prefix = strs[0];

        for (let i = 0; i < strs.length; i++) {
            while (strs[i].indexOf(prefix) !== 0) {
                prefix = prefix.substring(0, prefix.length - 1);

                if (prefix === '') {
                    return '';
                }
            }
        }

        return prefix;
    };

    anotherAlgorithm(node) {

    }
}

let sol = new solution();

// and the code completion works as well. So i defined the function properly
sol.longestCommonPrefix();
sol.anotherAlgorithm(null);
/**
 * underlying data structure array and strings
 */