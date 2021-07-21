function otherFunction () {
    itBreak();
}

function itBreak () {
    return 3 + z;
}

function itBreakAsync (callback) {

    // Thread secundary
    setTimeout(function () {
        try {
            return 3 + z;
        } catch(error) {
            console.error('Error in function async')
            callback(error)
        }
    })
}

try {
    // otherFunction();
    itBreakAsync(function (error) {
        console.log(error.message)
    });
} catch (error) {
    console.error('Oh no, something broke...');
    console.error(error);
    console.log('but nothing happens, we have captured it');
}

console.log('This is in the Final')