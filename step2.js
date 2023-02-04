const fs = require('fs');
const axios = require('axios');

const arg = process.argv[2];

function cat() {
    fs.readFile(arg, 'utf-8', (error, data) => {
        if (error) {
            webCat(arg);
        }
        console.log(arg, data);
    });
};

async function webCat() {
    try {
        promise = await axios.get(arg)
        console.log(promise.data)
    }
    catch (e) {
        console.log('Invalid URL')
    }
   
};

cat();



