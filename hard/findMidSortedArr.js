function findMidSortedArr(A, B) {
    let m = A.length;
    let n = B.length;
    if (m > n) {
        return findMidSortedArr(B, A);
    }
    let iMin = 0;
    let iMax = m;
    while (iMin <= iMax) {
        let i = (iMin + iMax) / 2;
        let j = (m + n + 1) / 2 - i;
        if (i < iMax && B[j - 1] > A[i]) {
            iMin = i + 1;
        } else if (i > iMin && A[i - 1] > B[j]) {
            iMax = i - 1;
        } else {
            let maxLeft = 0;
            if (i == 0) {
                maxLeft = B[j - 1];
            } else if (j == 0) {
                maxLeft = A[i - 1];
            } else {
                maxLeft = Math.max(A[i - 1], B[j - 1]);
            }
            if ((m + n) % 2 == 1) {
                return maxLeft;
            }
            let minRight = 0;
            if (i == m) {
                minRight = B[j];
            } else if (j == n) {
                minRight = A[i];
            } else {
                minRight = Math.min(B[j], A[i]);
            }
            return (maxLeft + minRight) / 2.0;
        }
    }
    return 0.0;
}