let isDone: boolean = false;

let count: number = 10;

let name2: string = "semliker";

const sym = Symbol();
let obj = {
  [sym]: "semlinker",
};
console.log(obj[sym]);


let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];


enum Direction {
  NORTH, // --> 0 or =3,
  SOUTH,
  EAST,
  WEST, // --> 3
}
/*var Direction;
(function (Direction) {
    Direction["NORTH"] = "NORTH";
    Direction["SOUTH"] = "SOUTH";
    Direction["EAST"] = "EAST";
    Direction["WEST"] = "WEST";
})(Direction || (Direction = {}));
*/

let dir: Direction = Direction.NORTH;
console.log(dir)

var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum["C"] = "C";
    Enum["D"] = "D";
    Enum[Enum["E"] = 8] = "E";
    Enum[Enum["F"] = 9] = "F";
})(Enum || (Enum = {}));
console.log(Enum.A, Enum[0])


let notSure: any = 666;
notSure = "semlinker";
notSure = false;

/*
let value: unknown;

value = true; // OK
value = 42; // OK
value = "Hello World"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = new TypeError(); // OK
value = Symbol("type"); // OK
//*/
