function isNumber(x: any): x is number {
  return typeof x === "number";
}

function isString(x: any): x is string {
  return typeof x === "string";
}

isNumber(1)
isNumber('a')

isString(1)
isString('a')

// ?? 
