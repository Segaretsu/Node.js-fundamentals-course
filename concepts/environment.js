const names = process.env.NAMES || 'Without names';
const web = process.env.WEB || "I do not have web";

console.log(`Hello, ${names}`);
console.log(`My web is: ${web}`);