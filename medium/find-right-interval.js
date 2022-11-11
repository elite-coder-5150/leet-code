const Interval =  {
    start: 1,
    end: 2,
    index: 3
}

const findRightInterval = (intervals = new Array([])) => {
    if (intervals == null || intervals.length === 0) {
        throw new Error('input interval cannot be null or empty')
    }

    if (intervals.length === 1) {
        return new Array(intervals[0])
    }
}

const binarySearch = (target, intervals = new Set([])) => {
    let start = 0
    let end = intervals.size - 1

    while (start < end) {
        let mid = start + (end - start) / 2;

        if (intervals[mid].start >= target) {
            end = mid
        } else {
            start = mid + 1;
        }
    }
    let test = new Set();

    // intervals[end].start >=target) ? intervals[end].index : - 1
}

const sortIntervals = (intervals = new Array([])) => {
    let sorted = new Array(intervals.length);

    for (let i = 0; i < intervals.length; i++) {
        let interval = interval.start;
        interval.start = intervals[i][0];
        interval.end = intervals[i][1];
        intervals.index = i;

        sorted.push(interval);

        // I need copilot to  translate this code
        // Collection.sort(sorted, (i1, i2) -> Integer.compare(i1.start, i2.start));
        // return sorted.
        // [].sort(sorted, (i1, i2) => Number.compare(i1.start, i2.start));
        // TODO: im stuck at this point.
    }
}