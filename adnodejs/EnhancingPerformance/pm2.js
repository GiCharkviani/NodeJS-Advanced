const express = require('express');
const app = express();

/* CLUSTERING WITH PM2 */
// run pm2:
// pm2 start pm2.js -i 0 // it will setup so many instances (forks) as many logical cores your CPU has
// better run from command prompt
// orders:
// pm2 show pm2 - for detailed info about each process
// pm2 monit - gives dashboard to observer on processes
// STOP RUNNING SERVERS:
// pm2 delete [name]

app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        res.send('Hi there')
    })
})

app.get('/fast', (req, res) => {
    res.send('This was fast!')
})

app.listen(3000, () => console.log('Running on 3000'))
