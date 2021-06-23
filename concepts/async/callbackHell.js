function hello(names, myCallback) {
    setTimeout(function () {
        console.log(`Hello, ${names}`)
        myCallback(names)
    }, 1000);
}

function speak(callbackSpeak) {
    setTimeout(function () {
        console.log('Bla bla bla bla bla...');
        callbackSpeak();
    }, 1000)
}

function bye(nombre, otherCallback) {
    setTimeout(function () {
        console.log(`Good bye ${nombre}`);
        otherCallback();
    }, 1000)
}

function conversation (names, veces, callback) {
    if(veces > 0) {
        speak(function() {
            conversation(names, --veces, callback);
        })
    } else {
        bye(names, callback);
    }
}

// --
console.log('Started process...')
hello("Jhon Sebastian", function(names) {
    conversation(names, 3, function () {
        console.log('Finish process...')
    });
})

// hello("Jhon Sebastian", function (names) {
//     speak(function () {
//         speak(function () {
//             speak(function () {
//                 bye(names, function () {
//                     console.log('Finish process...')
//                 });
//             })
//         })
//     })
// })
