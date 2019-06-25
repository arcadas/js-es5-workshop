var A = function() {
  var x = 1;
  function logX() {
    console.log(x);
  }
  return {
    logX: logX
  };
}();

module.exports = A;
