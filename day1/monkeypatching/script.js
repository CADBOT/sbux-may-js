var myArray = [1, 2, 3, 7];

Array.prototype.sayHello = function() {
  console.log('hello');
};

myArray.sayHello();
