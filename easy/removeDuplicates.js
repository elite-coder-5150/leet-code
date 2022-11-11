/**
 * given an integer array of numbers sorted in non-decreasing order, remove
 * duplicates in-place such that each unique element appears only once. The
 * relative order of the elements should be kept the same.
 *
 * since it is impossible to change the length of the array in some languages,
 * you must instead have the result be placed in the first part of the array nums.
 * more formally, if there are k elements after removing the duplicates, then the
 * first k elements of nums should hold the final result. It does not matter what
 * you leave beyond the first k elements.
 *
 * return k after placing the final result in the first k slots of nums.
 *
 * do not allocate extra space for another array. you must do this by modifying
 * the input array in-place with O(1) extra memory.
 *
 * 
 * @param nums
 * @returns {number}
 */

const removeDuplicates = (nums) => {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}