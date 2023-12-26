/*1.“尖括号” 语法*/
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

/*2.as 语法*/
let someValue2: any = "this is a string";
let strLength2: number = (someValue as string).length;
