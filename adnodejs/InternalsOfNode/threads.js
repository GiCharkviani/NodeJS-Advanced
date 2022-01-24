
// updating threadpool size, as by default,  libuv has 4

// for WINDOWS: (SET UV_THREADPOOL_SIZE=2) -and (node threads.js) -
// in WS IDE insert this: UV_THREADPOOL_SIZE=2 into environment variables

// for LINUX or iOS - process.env.UV_THREADPOOL_SIZE=2 - just before the function that needs to use libov

const crypto = require('crypto');

// 1. When we run this file, both functions will be more or less, exactly the same time
// 2. when don't modify start variable at all

const start = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
    console.log('1:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
    console.log('2:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
    console.log('3:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
    console.log('4:', Date.now() - start)
})

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
    console.log('5:', Date.now() - start)
})

// as a result, thread pool uses 4 threads, hence fifth function will be a bit late