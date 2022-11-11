const findPair = (arr, sum) => {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(sum - arr[i]))
            return true;
        map.set(arr[i], i);
    }
    return false;
}

const _findPair = (arr, sum) => {
    let left = 0,
        right = arr.length - 1;

    while (left < right) {
        if (arr[left] + arr[right] === sum)
            return true;
        if (arr[left] + arr[right] < sum)
            left++;
        else
            right--;
    }
    return false;
}