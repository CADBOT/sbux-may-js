function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.someObject = {hello: 'world'}

var p1 = new Person('hank', 50);
var p2 = {name: 'hank', age: 50}

console.log(p1.name);
console.log(p1.age);
console.log(p1.someObject);
console.log(p1.hasOwnProperty('name'));
console.log(p1.hasOwnProperty('someObject'));
