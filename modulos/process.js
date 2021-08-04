// const p = require('process');

process.on('beforeExit', () => {
    console.log('The process will end');
});

process.on('exit', () => { // Event loop disconnected
    console.log('Orale, the process has finished');
    setTimeout(() => {
        console.log('This is never going to be seen');
    }, 0);
});

process.on('uncaughtException', (err, origin) => {
    console.error('Oh no, we forgot to catch a bug');
    // console.error(err);
});
// process.on('uncaughtRejection')

// notFunction(); // this is a error

console.log('This, if the error is not catch, this not see');

setTimeout(() => {
    console.log('This can be seen');
}, 0);