// 0/a.
// console.log(this);

// 0/b.
/*var s1 = document.querySelector('#mySelect');
s1.addEventListener('click', function() {
  console.log(this.options);
});
s1.click();*/


function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.fullName = function() {
    return this.firstName + ' ' + this.lastName;
  };
  // 1.
  this.getfullNameFn = function() {
    // 2.
    //console.log(this);
    return function() {
      return this.firstName + ' ' + this.lastName;
    };
  };
  // 3.
  this.getfullNameFn2 = function() {
    // Closure
    var that = this;
    return function() {
      return that.firstName + ' ' + that.lastName;
    };
  };
}

var bob = new Person('Bob', 'Smith');
console.log(bob.fullName());
// 1.
var bobFullNameFn = bob.getfullNameFn();
console.log(bobFullNameFn());
// 3.
var bobFullNameFn2 = bob.getfullNameFn2();
console.log(bobFullNameFn2());
