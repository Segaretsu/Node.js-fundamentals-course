function hello(names, myCallback) {
    setTimeout(function () {
        console.log(`Hello, ${names}`)
        myCallback(names)
    }, 1000);
}

function bye (nombre, otherCallback) {
    setTimeout(function() {
        console.log(`Good bye ${nombre}`);
        otherCallback();
    }, 1000)
}

console.log('Started process...')

hello("Jhon Sebastian", function (names) {
    bye(names, function () {
        console.log('Finish process...')
    });
})
