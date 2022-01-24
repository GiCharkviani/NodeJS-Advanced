const express = require('express');
const app = express();
const cluster = require('cluster');
const crypto = require("crypto");

// CLUSTERING

// Is the file being executed in master mode?
if (cluster.isMaster) {
    // Cause index.js to be executed *again* but in child mode
    // each child has its own thread pool
    // just to make it easier, we are going to restrict it to one, using EnvVars
    cluster.fork();
    cluster.fork();
    // there is upperbound, so 2 forks are enough and faster than more of them, it comes from CPU limitation,
    // as it handles threads
} else {
    app.get('/', (req, res) => {
        // here on each request,
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hi there')
        })
    })

    app.get('/fast', (req, res) => {
        res.send('This was fast!')
    })

    app.listen(3000, () => console.log('Running on 3000'))
}