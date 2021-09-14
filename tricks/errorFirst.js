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

asynchronous(function (err, data) {
    if(err){
        console.error('We have a mistake');
        console.error(err);
        return false;
    }
});