function inherits(parent, child) {
  var instanceOfParent = Object.create(parent.prototype);
  child.prototype = instanceOfParent;
  child.prototype.constructor = child
}

function Animal(name, age) {
  this.name = name;
  this.age = age; 
}

Animal.prototype.eat = function() {
  console.log('the animal is eating')
};

function Cat(name, age, meow) {
  Animal.call(this, name, age);
  this.meow = meow;
}

inherits(Animal, Cat);

var c1 = new Cat('fluffy', 2, 'meow');
c1.eat()
