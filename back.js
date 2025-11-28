/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    let result = [];

    function backtrack(current, open, close) {
        // If the current string is of length 2*n, it's valid
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        // We can add '(' if we still have open brackets left
        if (open < n) {
            backtrack(current + "(", open + 1, close);
        }

        // We can add ')' if close < open (to keep it valid)
        if (close < open) {
            backtrack(current + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);
    return result;
};
