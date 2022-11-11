const validParentheses = (s) => {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
        stack.push(s[i]);
        } else {
        const last = stack.pop();
    
        if (s[i] !== map[last]) {
            return false;
        }
        }
    }
    
    return stack.length === 0;
    

}