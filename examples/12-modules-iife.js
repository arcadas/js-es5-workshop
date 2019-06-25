var a = 1;

(function() {
  var x = 2;
  var logX = function() {
    console.log(a);
    console.log(x);
  };
  logX();
})();

console.log('------------');
console.log(a);
console.log(x); // not defined

// Seperated module (e.g.: statistics module, event handler module)
