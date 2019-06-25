function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}

var bob = new Person('Bob', 'Smith');
// console.log(bob);

var welcome = function(greeting) {
  console.log(greeting + ' ' + this.firstName);
};

welcome.call(bob, 'Hello');
welcome.apply(bob, ['Hello']);
