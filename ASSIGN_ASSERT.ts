let x: number;
// let x!: number; // <-- use me (tell typescript, i will make to assign/give a value to `x` before using `x`)
initialize();
// Variable 'x' is used before being assigned.(2454)
console.log(2 * x); // Error

function initialize() {
  x = 10;
}
