function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.welcome = function(greeting) {
    console.log(greeting + ' ' + this.firstName);
  };
}

var bob = new Person('Bob', 'Smith');
// console.log(bob);

window.addEventListener('click', bob.welcome('Hello'));
// 1.
window.addEventListener('click', function() {
  bob.welcome('Hello');
});
// 2.
window.addEventListener('click', bob.welcome.bind(bob, 'Hello'));

// 3.
var welcome2 = function(greeting) {
  console.log(greeting + ' ' + this.firstName);
};
var greeting = welcome2.bind(bob, 'Hello');

window.addEventListener('click', greeting);
