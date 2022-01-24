const https = require('https');

const start = Date.now();

function doRequest() {
    https.request('https://www.google.com', res => {
        // res is object that emits events, when we got response
        res.on('data', () => {})
        res.on('end', () => {
            console.log(Date.now() - start)
        })
    })
        .end();
}

// all of them are done at the same time
// it's because all is done by OS, hence we don't touch thread pool, as libuv passes http requests to OS
// they are related to pending OS tasks

doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
