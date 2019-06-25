// Object type Person
function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
  // 2.
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}
// 2.
/*Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};*/

var bob = new Person('Bob', 'Smith');
console.log(bob); // 2. age
// 2.
//console.log(bob.fullName());

// 3.
//var john = new Person('John', 'Smith');
//bob.yearOfBirth = 1990;
//Person.prototype.age = 29;
//console.log(john);
