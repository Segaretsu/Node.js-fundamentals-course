console.time('all');

let sum = 0;
console.time('bucle');
for (let i = 0; i < 100000000; i++) {
    sum += 1;
}
console.timeEnd('bucle');

let sum2 = 0;
console.time('bucle2');
for (let j = 0; j < 1000000000; j++) {
    sum2 += 1;
}
console.timeEnd('bucle2');

console.time("asynchronous");
console.log("Start asynchronous process")
asynchronous()
    .then(() => {
        console.timeEnd("asynchronous")
    });

console.timeEnd('all');

function asynchronous() {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log("End asynchronous process");
            resolve();
        });
    });
}


