function hello(names) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`Hello, ${names}`)
            resolve(names);
        }, 1000);
    });
}

function speak(names) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Bla bla bla bla bla...');
            // resolve(names)
            reject('Found error.')
        }, 1000)
    });
    
}

function bye(names) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Good bye ${names}`);
            resolve();
        }, 1000)
    })
}

// ---
console.log('Started process...')
hello('Jhon Agudelo')
    .then(speak)
    .then(speak)
    .then(speak)
    .then(speak)
    .then(bye)
    .then((names) => {
        console.log('Finish process...')
    })
    .catch(error => {
        console.error('An error has occured:');
        console.error(error);
    });