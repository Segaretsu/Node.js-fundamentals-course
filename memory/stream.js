const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

// We define the encoding to specify the format in which the file is, in this case so that instead of binary it brings us each data in utf-8
readableStream.setEncoding('utf-8');

// readableStream.on('data', function (chunk) {
//     data += chunk;
// })

// readableStream.on('end', function () {
//     console.log(data);
// })

// WriteStreams

// Write in buffer of System output
// process.stdout.write('hello');
// process.stdout.write('how');
// process.stdout.write('are');
// process.stdout.write('you?');

const Transform = stream.Transform;

// Upper class
function Upper() {
    Transform.call(this);
}

// we inherit (heredamos) from Transform to our Upper class
util.inherits(Upper, Transform);

// prototype pattern to modify one of the inherited methods
Upper.prototype._transform = function (chunk, codif, cb) {
    chunkUpper = chunk.toString().toUpperCase();
    this.push(chunkUpper);
    cb();
}

let upper = new Upper();
// pipe function to send from one site to another
// in this case, after passing through upper, the response is passed to the process.stdout, so that it prints each chunk
readableStream
    .pipe(upper)
    .pipe(process.stdout);