var app = app || {};

var i = 1;

(function() {

  // Some code
  console.log(i);
  var y = 2;

  function A() {
    this.x = 3;
  }
  A.prototype.logX = function() {
    console.log(y);
    console.log(this.x);
  };

  app.A = new A();

})();

console.log('------------');
app.A.logX();

var a = new A(); // A is not defined
