const findMinWindow = (arr) => {
    let left = 0
        right = arr.length - 1

    while (arr[left] < arr[left + 1] && left < arr.length - 1) {
        left++
    }

    if (left === arr.length - 1)
        return 0;

    while (arr[right] > arr[right - 1] && right > -1) {
        right--
    }

    const subarr = arr.slice(left, right + 1);
    const subarrMin = Math.min(...subarr)
    const subarrMax = Math.max(...subarr)

    while (arr[left - 1] > subarrMin && left > 0) {
        left--
    }

    while (arr[right + 1] < subarrMax && right < arr.length - 1) {
        right++;
    }
}