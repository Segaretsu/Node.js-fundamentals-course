function asynchronous(callback) {
    setTimeout(function () {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (error) {
            // callback(error, null);
            callback(error);
        }
    }, 1000);
}

// try {
    // Try catch, dont work in asynchronous functions
asynchronous(function (err, data) {
    if (err) {
        console.error('We have a mistake');
        console.error(err);
        // throw err;
        return false;
    }

    console.log('Everything went well, my data is: ', data);
});
// } catch (err) {
//     console.error('We have catch a error');
//     console.error(err);
// }