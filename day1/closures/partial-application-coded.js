function adder(a) {
  return function(b) {
    return a + b
  };
}

console.log(adder(2)(4))

var add10 = adder(10);
var add4 = adder(4);

console.log(add10(5));
console.log(add10(2));

console.log(add4(8));

function greet(greeting) {
  return function(name) {
    return greeting + ' ' + name;
  };
}

var sayHello = greet('hello');
console.log(sayHello('bob'));
console.log(sayHello('beth'));




