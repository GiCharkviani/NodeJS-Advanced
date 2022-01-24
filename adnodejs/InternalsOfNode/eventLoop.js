// 1. node myFile.js

const pendingTimers = [];
const pendingOsTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running
// 2. myFile.runInContext();

function shouldContinue() {
 // here NodeJS does 3 checks EventLoop continue iteration or not:
    // 1. Check one: Any pending setTimeout, setInterval, setImmediate?
    // 2. Check two: Any pending OS tasks? (Like server listening to port)
    // 3. Check three: Any pending long-running operations? (Like fs module)
    return pendingTimers.length || pendingOperations.length || pendingOsTasks.length
}

// after above function executed:

// 3. event loop
//  Entire body executes in one 'tick'

while(shouldContinue()) {
    // 1) Node looks at pendingTimers and sees if any functions are ready to be called. setTimeout, setInterval

    // 2) Node looks at pendingOsTasks and pendingOperations and calls relevant callbacks

    // 3) Pause execution. Continue when...
    // - a new pendingOsTask is done
    // - a new pendingOperation is done
    // - a timer is about to complete

    // 4) Look at pendingTimers. Call any setImmediate

    // 5) Handle any 'close' events:
    /*
    for example: readStream('close', () => {
        console.log('Cleanup code');
    } )
     */
}


// exit back to terminal