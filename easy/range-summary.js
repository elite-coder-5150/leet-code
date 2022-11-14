/**
 * You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
 */
const summaryRanges = (nums) => {
    const result = [];
    let start = 0;
    let end = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
        end++;
        } else {
        if (start === end) {
            result.push(nums[start].toString());
        } else {
            result.push(`${nums[start]}->${nums[end]}`);
        }
        start = i + 1;
        end = i + 1;
        }
    }
    return result;
    }

// todo: fix this bug
const _summaryRanges = (nums) => {
    if (nums.lengh == 0)
        return [];

    let result = [];
    let part = [num[0]];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - part[part.length - 1] == 1) {
            result.push(`${part[0]}->${part[part.length - 1]}`);
        } else {
            result.push(`${part[0]}`);
        }

        part.pop();
        part = []
        part.push(nums[i]);
        
        }
    }

    if (part.length > 1) {
        result.push (`${part[0]}->${part[part.length - 1]}`);
    } else if (part.length == 1) {
        result.push(`${part[0]}`);
    }
}