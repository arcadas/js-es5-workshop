// Global Execution Context
var a = 'Hello ';
first(); // Hoisting

function first() {
  var b = 'Hi '; // Execution Context
  second();

  function second() {
    var c = 'Hey ';
    third();
  }
}

function third() {
  var d = 'John';
  console.log(a + d);
  // console.log(a + b + c + d); // Scope chain vs Execution Stack
}
