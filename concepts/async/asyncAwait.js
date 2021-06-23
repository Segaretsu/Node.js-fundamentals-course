async function hello(names) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`Hello, ${names}`)
            resolve(names);
        }, 1000);
    });
}

async function speak(names) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Bla bla bla bla bla...');
            resolve(names)
        }, 1000)
    });
    
}

async function bye(names) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Good bye ${names}`);
            resolve();
        }, 1000)
    })
}

async function main() {
    const names = await hello("Jhon Agudelo");
    await speak();
    await speak();
    await speak();
    await bye(names);
    console.log('Finish process...');
}

console.log('Started process...');
main();
console.log('Second instruction...');