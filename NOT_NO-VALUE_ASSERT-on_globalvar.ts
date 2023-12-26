const a: number | undefined = undefined;

const b0: number = a; // why not happen error
const b1: number = a!;

console.log(b0, b1, a); 



function fn(b: number | undefined) {
  const b11: number = b;
}
// fn(1); // good
fn(); // happen error
