var a = { x: 1 };
var b = Object.create(a);
console.log(b);
// 1.
b.y = 2;
console.log(b.x);
console.log(a.y);
console.log(b.y);
console.log(Object.getPrototypeOf(b));
console.log(b);
