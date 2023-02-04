const fs = require('fs');

const fileNames = process.argv.slice(2)

function cat() {
    fileNames.forEach(fileName => {
        fs.readFile(fileName, 'utf-8', (error, data) => {
            if (error) {
                console.log(error);
                process.exit(1);
            }
            console.log(fileName, data);
      });
    });
}

cat();