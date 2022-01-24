const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest() {
    https.request('https://www.google.com', res => {
        // res is object that emits events, when we got response
        res.on('data', () => {})
        res.on('end', () => {
            console.log('HTTPS:',Date.now() - start);
        })
    })
        .end();
};

function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
        console.log('Hash:', Date.now() - start);
    })
};

// doesn't work with threadpool
doRequest();

// it takes very very few time
fs.readFile("multitask.js", 'utf8', () => {
    console.log('FS:', Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();

// in above case: first is HTTP, then one Hash and then ReadFile and then rest of the Hashes
// if threadpool is increased, so more than default, one more - 5, then FS finishes first and then HTTPS and others