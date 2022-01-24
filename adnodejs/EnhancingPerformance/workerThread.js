const express = require('express');
const app = express();
const {Worker, isMainThread, parentPort, workerData} = require('worker_threads')

/* WEB-WORKER THREADS */
// not fully figured out, because course in this case is outdated but, here he uses webworker-threads npm library
// in general, worker-threads is used in new NodeJS that I have to learn after this course

app.get('/', (req, res) => {

    const worker = new Worker(function () {
        // this - equals thread, that's why function declaration is used
        this.onmessage = function () {
            let counter = 0;
            while(counter < 1e9) {
                counter++;
            }
            postMessage(counter);
        }
    })

    worker.onmessage = function (myCounter) {
        console.log(myCounter)
    }

    worker.postMessage('hi')
})

app.get('/fast', (req, res) => {
    res.send('This was fast!')
})

app.listen(3000, () => console.log('Running on 3000'))
