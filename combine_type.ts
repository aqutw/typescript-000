type PartialPointX = { x: number; };
type Point = PartialPointX & { y: number; };

// let point: PartialPointX = { // Error
let point: Point = { // Ok
  x: 1,
  y: 1
}
