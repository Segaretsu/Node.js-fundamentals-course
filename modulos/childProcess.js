const { exec, spawn } = require('child_process');

// stdou: standard main output
// Linux: ls -la
// Windows: dir
// exec('dir', (err, stdout, sterr) => {
//     if(err) {
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// });

// exec('node ./console.js', (err, stdout, sterr) => {
//     if(err) {
//         console.log(err);
//         return false;
//     }
//     console.log(stdout);
// });

let processX = spawn('cmd.exe', ['/c', 'dir']);

console.log(processX.pid);
console.log(processX.connected);

processX.stdout.on('data', function (data) {
    console.log(processX.killed);
    console.log(data.toString());
});

processX.on('exit', function () {
    console.log('ProcessX End');
    console.log(processX.killed);
});