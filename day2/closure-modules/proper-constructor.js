function Person(name, age) {
  this.name = name;
  this.age = age;
}
// proper way to do an instance method
Person.prototype.sayHello = function() {
  console.log('Hello from ' + this.name);
};

Person.classMethod = function() {
  console.log('I am a fake static method')
}


var p1 = new Person('peggy', 42);
var p2 = new Person('bob', 12);
p1.sayHello();


Person.prototype.sayGoodbye = function() {
  console.log('Goodbye')
}

console.log(p1.sayGoodbye)
console.log(Person.classMethod())
