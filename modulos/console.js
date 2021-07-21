console.log('Thing');

console.info('Thing');

console.error('One Error');

console.warn('Be careful');


var table = [
    { a: 1, name: 'Jhon' },
    { a: 2, name: 'Sebastian'}
]

console.table(table);


console.group('Conversation:')
console.log('Hello');
console.group('Bla');
console.log('Blablabla');
console.log('Blablabla');
console.log('Blablabla');
console.groupEnd('Bla');
console.log('Bye');
console.groupEnd('Conversation:');

function function1 () {
    console.group('funtion 1');
    console.log('This is a message of function1');
    console.log('This is a message of function1');
    function2();
    console.log('Back to function1')
    console.groupEnd('funtion 1');
}

function function2 () {
    console.group('funtion 2')
    console.log('This is a message of function2');
    console.groupEnd('funtion 2')
}

console.log('Let start');
function1();

console.count('times');
console.count('times');
console.count('times');
console.countReset('times');
console.count('times');