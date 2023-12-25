interface ObjectConstructor {
  create(o: object | null | string): any;
  // ...
}


Object.create({});     // OK
Object.create(null);      // OK
Object.create("oops");    // Error --> Add "| string", it will be complied successfully
/*
Object.create(undefined); // Error
Object.create(1337);      // Error
Object.create(true);      // Error
*/
