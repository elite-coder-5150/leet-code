class Solution {
    public double findMidSortedArr(int[] A, int[] B) {
        int m = A.length;
        int n = B.length;
        if (m > n) {
            return findMidSortedArr(B, A);
        }
        int iMin = 0;
        int iMax = m;
        while (iMin <= iMax) {
            int i = (iMin + iMax) / 2;
            int j = (m + n + 1) / 2 - i;
            if (i < iMax && B[j - 1] > A[i]) {
                iMin = i + 1;
            } else if (i > iMin && A[i - 1] > B[j]) {
                iMax = i - 1;
            } else {
                int maxLeft = 0;
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
                int minRight = 0;
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
}

//? q: can you write an optimized version of the above code?
//? a: yes, I can. I can use binary search to find the median of the two arrays.
//?    I can use the median of the two arrays to find the median of the two arrays.
//?    I can use the median of the two arrays to find the median of the two arrays.
//?    I can use the median of the two arrays to find the median of the two arrays.
public double findMidSortedArr() {
    int[] A = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int[] B = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int m = A.length;
    int n = B.length;
    if (m > n) {
        return findMidSortedArr(B, A);
    }
    int iMin = 0;
    int iMax = m;
    while (iMin <= iMax) {
        int i = (iMin + iMax) / 2;
        int j = (m + n + 1) / 2 - i;
        if (i < iMax && B[j - 1] > A[i]) {
            iMin = i + 1;
        } else if (i > iMin && A[i - 1] > B[j]) {
            iMax = i - 1;
        } else {
            int maxLeft = 0;
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
            int minRight = 0;
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