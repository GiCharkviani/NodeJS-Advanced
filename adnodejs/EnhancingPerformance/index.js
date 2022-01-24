const express = require('express');
const app = express();
const cluster = require('cluster'); // after this below is not true
// When request comes, it goes through single threaded event loop

// checks if it is a main index.js
// console.log(cluster.isMaster)
// on main instance, isMaster is true, on worker instances, brought by cluster.fork() - is false

// CLUSTERING

// Is the file being executed in master mode?
if (cluster.isMaster) {
    // Cause index.js to be executed *again* but in child mode
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();

} else {
    // I'm a child, Iam going to act like a server and do nothing else
    function doWork(duration) {
        const start = Date.now();
        while (Date.now() - start < duration) {
        }
    }

    app.get('/', (req, res) => {
        // this will be executed right into event loop
        doWork(10000)
        res.send('Hi there')
    })
    app.get('/fast', (req, res) => {
        res.send('This was fast!')
    })

    app.listen(3000, () => console.log('Running on 3000'))
}