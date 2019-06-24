var counter = 0;
function increment() {
  ++counter;
  console.log(counter);
}
increment();
increment();
counter = 0;
increment();

console.log('--------------');

function increment2() {
  var counter2 = 0;
  counter2 = ++counter2;
  console.log(counter2);
}
increment2();
increment2();
counter2 = 0;
increment2();

console.log('--------------');

function increment3() {
  var counter3 = 0;
  return function() {
    counter3 = ++counter3;
    console.log(counter3);
  };
}
increment3Count = increment3();
increment3Count();
increment3Count();
counter3 = 0;
increment3Count();
// console.log(counter3); // 0

// Exection Context of increment() is destroyed with VO and counter
// Exection Stack: Global Execution Context -> increment()
// Scop chain: Global Scope -> increment() -> increment()
