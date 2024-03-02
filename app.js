const fs = require('fs');

console.log("HI");
fs.readFile('file.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
    });