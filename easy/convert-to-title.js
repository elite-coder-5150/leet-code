const convertToTitle = (colNumber) => {
    let result = '';
    while (colNumber > 0) {
        colNumber--;
        result = String.fromCharCode(colNumber % 26 + 65) + result;
        colNumber = Math.floor(colNumber / 26);
    }
    return result;
};