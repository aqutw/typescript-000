let isDone: boolean = false;
let count: number = 10;
{ // workaround
  let name: string = "semliker";
}
// or..
let name2: string = "semliker";

const sym = Symbol(); // MUST use `tsc a01.ts --target es2015` or `tsc a01.ts --target es2016`
let obj = {
  [sym]: "semlinker",
};
console.log(obj[sym]);

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

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


enum Direction2 {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}

let dirName = Direction2[0]; // NORTH
let dirVal = Direction2["NORTH"]; // 0
console.log(dirName, dirVal)

const enum Direction3 {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}
let dir3: Direction = Direction.NORTH;
console.log('Direction3', /*cannot access Direction3*/ Direction3.EAST, dir3)

enum Enum2 {
  A,
  B,
  C = "C",
  D = "D",
  E = 8,
  F,
}
console.log('Enum2', Enum2, Enum2.A, Enum[0])

let notSure: any = 666;
/*any 类型本质上是类型系统的一个逃逸舱。作为开发者，这给了我们很大的自由：TypeScript 允许我们对 any 类型的值执行任何操作，而无需事先执行任何形式的检查。*/
notSure = "semlinker";
notSure = false;
if(0){
notSure(); // !!!!!!!!!!!!!!!!!compile OK!
}

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
if(0){
//value(); // !!!!!!!!! compile error!!!!!!!!!!!!!
}

let value1: unknown = value; // OK
/* !!!!!!!!! compile error!!!!!!!!!!!!!
let value2: any = value; // OK
let value3: boolean = value; // Error
let value4: number = value; // Error
let value5: string = value; // Error
let value6: object = value; // Error
let value7: any[] = value; // Error
let value8: Function = value; // Error

unknown 类型只能被赋值给 any 类型和 unknown 类型本身。直观地说，这是有道理的：只有能够保存任意类型值的容器才能保存 unknown 类型的值。毕竟我们不知道变量 value 中存储了什么类型的值。
*/

let tupleType: [string, boolean];
tupleType = ["semlinker", true];

function warnUser(): void {
  console.log("This is my warning message");
  return; // optional line, adding this line is still ok
}

function warnUser2(): undefined {
  console.log("This is my warning message");
  return; // MUST add this line
}

let unusable: void = undefined;
let unusable_: void;
let unusable2: undefined = undefined;
let unusable2a: undefined;
