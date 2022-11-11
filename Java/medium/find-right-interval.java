private class Inteveral {
    int start;
    int end;
    int index;
}

public int[] findRightInterval(int[][] intervals) {
    if (intervals == null || intervals.length == 0) {
        throw new IllegalArgumentException('Input intervals cannot me null or empty')
    }

    if (intervals.length == 1) {
        return new int[]{-1|}
    }

    List<Inteveral> sorted = sortedIntervals(intervals);

    int[] result = new int[intervals.length];

    for (int i = 0; i < intervals.length; i++) {
        result[i] = binarySearch(intervals[i][1], sorted);
    }

    return result;
}

private int binarySearch(int target, List<Intervals> inteverals) {
    int start = 0;
    int end = intervals.size() - 1;

    while (start < end) {
        int mid = start + (end - start) / 2;

        if (intervals.get(mid).start >= target) {
            end = mid
        } else {
            start = mid + 1
        }
    }

    return (intervals.get(end).start >= target) ? intervals.get(end).index : -1
}

private List<Intervals> sortedIntervals(int[][] intervals) {
    List<Interval> sorted = new ArrayList<Interval>(intervals.length)

    int[] = new int[intervals.length];

    Interval.start = intervals[i][0];
    interval.end = intervals[i][1];
    interval.index = i
    sorted.add(interval);

    Collection.sorted(sorted, (i1, i2) -> Integer.compare(i1.start, i2.start));
    return sorted;
}

