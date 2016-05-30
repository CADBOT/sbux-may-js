function Dog(name, age) {
  // var this = {}
  // this.__proto__ = Dog.prototype
  // this.__proto__.constructor = Dog
  this.name = name;
  this.age = age;
  // return this
}

Dog.prototype.performTrick = function() {
  console.log(this.name + ' the dog rolled over!')
};

var dog1 = new Dog('spot', 3);

console.log(dog1.name);
console.log(dog1.age);
console.log(dog1.__proto__);
console.log(dog1.__proto__ == Dog.prototype);
console.log(dog1.constructor == Dog);

var dog2 = Object.create(Dog.prototype);
console.log(dog2.__proto__)
console.log(dog1.__proto__ == dog2.__proto__)

dog2.performTrick();




