interface Point {
  x: number;
  y: number;
}

class SomePoint implements Point {
  x = 1;
  y = 2;
}

type Point2 = {
  x: number;
  y: number;
};

class SomePoint2 implements Point2 {
  x = 1;
  y = 2;
}

type PartialPoint = { x: number; } | { y: number; }; // fail--> | { x: number; y: number; };
type PartialPoint2 = { x?: number; y?: number; }; // <------ you MUST use this way

// A class can only implement an object type or 
// intersection of object types with statically known members.
class SomePartialPoint implements PartialPoint2 { // Error
  x = 1;
  y = 2;
}
