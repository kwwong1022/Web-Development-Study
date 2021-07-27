const figlet = require('figlet');

figlet('Hello', function(err, data) {
    if (err) {
        console.dir(err);
        return;
    }
    console.log(data);
});