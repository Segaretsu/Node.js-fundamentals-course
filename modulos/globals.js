console.log(setInterval);

let i = 0;
let intervalo = setInterval(function () {
    if(i === 3) {
        clearInterval(intervalo);
    }
    i++;
    console.log('Hi');
}, 1000);

setImmediate(function () {
    console.log('Good Night')
});

console.log(process);
// Directory of folder
console.log(__dirname);
// File directory
console.log(__filename);

// Global variable
global.myVar = 'variableX'

console.log(myVar)