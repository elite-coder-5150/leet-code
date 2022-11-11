/**
 * given an array number and an integer val, remove all occurrences of val in
 * numbers in-place. the relative order of the elements may be changed.
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
 *
 *
 * @param nums
 * @param val
 * @returns {number}
 */
const removeElement = (nums, val) => {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}