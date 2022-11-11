// write a function that reads a file, then count the words

// and returns the number of lines in the file

const fs = require('fs');

countWordsInFile = (fileName) => {
    let file = fs.readFileSync(fileName, 'utf8');
    let words = file.split(' ');
    return words.length;
}

countCommentsInFile = (fileName) => {
    let file = fs.readFileSync(fileName, 'utf8');
    let lines = file.split('');
    let comments = lines.filter(line => line.startsWith('//'));
    return comments.length;
}

const getWordCount = (fileName) => {
    let file = fs.readFileSync(fileName, 'utf8');
    let words = file.split(' ');
    return words.length;
}