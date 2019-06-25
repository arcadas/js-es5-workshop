var A = function() {
  // 0.
  // console.log('A');
  // 2.
  //this.x = 1;
  var x = 1;
  function logX() {
    console.log(x);
  }
  return {
    logX: logX
  };
// Constructor -> console.log -> new keyword
};
// 0.
//}(); // console.log

// 2.
//A.prototype.logX2 = function() {
//  console.log(this.x2);
//};
var a = new A();
console.log(a);
a.logX();
// 2.
//a.logX2();

// 1.

function B() {
  this.y = 2;
}
B.prototype.logY = function() {
  console.log(this.y);
};
var b = new B();
console.log(b);
b.logY();
