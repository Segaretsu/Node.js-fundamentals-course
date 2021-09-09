const http = require('http');

http.createServer(router).listen(process.env.PORT || 3000);

function router(request, response) {
    console.log('New request!');
    console.log(request.url);

    switch (request.url) {
        case '/hello':
            let greeting = hello();
            response.write(greeting);
            response.end();
            break;
        default:
            response.write('Error 404: I have no idea of your need');
            response.end();
    }
    // response.writeHead(201, { 'Content-type': 'text/plain' });
    // response.write('Hello!!, I already know how to use HTTP in Nodejs');
    // response.end();
}

function hello () {
    return 'Hello there, How are you?';
}

console.log('Listen https in port: ' + (process.env.PORT || 3000))