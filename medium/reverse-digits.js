const reverse = (num) => {
    let rev_num = 0;

    while (num != 0) {
        rev_num = rev_num * 10 + num % 10;
        num = Math.floor(num / 10);
    }

    return rev_num;
}

// garbage code
const _reverse = (x) => {
    var output = 0;
    var max = Math.pow(2, 31);
    var min = Math.pow(-2, 31);

    while (x != 0) {
        output = output * 10 + x % 10;
        x /= 10;
    }

    if (output > max || output < min) {
        return 0;
    }
}

// this is my code
const reverseNum = (num) => {
    