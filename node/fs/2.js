let fs = require('fs')

let files = ['./a.txt','./b.txt','../readme.md']

for (const file of files) {
    fs.readFile(file, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
       console.log(data.toString());
    })
}