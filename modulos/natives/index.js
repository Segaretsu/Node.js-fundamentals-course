// const myAddon = require("addon") // Name in binding
const myAddon = require("./build/Release/addon"); // Name in binding

console.log(myAddon);
console.log(myAddon.hello());