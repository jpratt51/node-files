const fs = require('fs');
const axios = require('axios');

const args = process.argv.slice(2);

function ifOut() {
    console.log('ifOut()')
    if (args[0] === '--out') {
        readFile(args);
    }
    else {
        cat(args);
    };
};

ifOut();

function readFile(args) {
    console.log('readFile()')
    fs.readFile(args[2], 'utf-8', (error, data) => {
        if (error) {
            webCat2(args);
        }
        rewriteFile(data);
    });
};

async function webCat2(args) {
    console.log('webCat2()')
    try {
        promise = await axios.get(args[2]);
        data = promise.data;
        console.log('something')
        console.log(promise)
        rewriteFile(promise.data);
    }
    catch (e) {
        console.log('Invalid URL');
    };
};

function rewriteFile(data) {
    console.log('rewriteFile()')
    let dataStr = String(data)
    fs.writeFile(`./${args[1]}` , dataStr, "utf8", function(err) {
        if (err) {
          console.error(err);
          process.exit(1);
        }
        console.log('Successfully wrote to file!');
      });
};

function cat() {
    console.log('cat()')
    fs.readFile(args[0], 'utf-8', (error, data) => {
        if (error) {
            webCat(args[0]);
        }
        console.log(args[0], data);
    });
};

async function webCat() {
    console.log('webCat()')
    try {
        promise = await axios.get(args[0]);
        console.log(promise.data);
    }
    catch (e) {
        console.log('Invalid URL');
    };
};