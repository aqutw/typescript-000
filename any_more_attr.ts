interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
//  [propName2: string]: string;
}

const p1 = { name: "semlinker" };
const p2 = { name: "lolo", age: 5 };
const p3 = { name: "kakuqo", sex: 1};//, sex2: 2, sex3: 3, sex4: true }
