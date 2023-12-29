type Message = string | string[];

let greet = (message: Message) => {
  // ...
};

greet("x")
greet(["x"])
// greet([1]) // Error
