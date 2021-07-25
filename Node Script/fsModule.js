/*
const fs = require('fs');
console.log(fs);

fs.mkdir('../apple', {recursive: true}, (err) => {
    console.log('Inside callback func');
    if (err) throw err;
});

console.log('after mkdir func');
*/

const fs = require('fs');
const folderName = process.argv[2] || 'project';

fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`, '');
fs.writeFileSync(`${folderName}/style.css`, '');
fs.writeFileSync(`${folderName}/app.js`, '');