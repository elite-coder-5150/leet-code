/**
 * 1. we merge the two arrays using the spread operator.
 * 2. we sort the new array.
 * 3. we get the middle index of the array by dividing they length by 2
 * 4. if the length of the array is even, we return the average of the two values at the middle index
 *    and the value before the middle index.
 * 5. if the length of the array is odd, we return the valuee at the middle index.
 */
const findMedianSortedArrays = (nums1, nums2) => {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);

    return merged.length % 2 === 0 ? (merged[mid] + merged[mid - 1]) / 2 : merged[mid];

};