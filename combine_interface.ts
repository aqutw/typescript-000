interface X {
  c: string;
  d: string;
}

interface Y {
  c: number;
  e: string
}

// type XY = X & Y; // c will become string&number=never
type XY = X | Y; // c will become string|number 
type YX = Y & X;

let p: XY = {d: 'd', e: 'e', c:1}; // when c:never, c:1 c:'1' will happen Comiple Error
//let q: YX = {d: 'd', e: 'e'};//, c:'1'&1};

