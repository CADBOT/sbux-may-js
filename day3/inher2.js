function Animal(name, age, weight) {
  this.name = name;
  this.age = age;
  this.weight = weight;
}

Animal.prototype = {
  constructor: Animal,
  eat: function(food) {
    console.log(`${this.name} is eating ${food}`);
  }
}

function Cat(name, age, weight, purrSound) {
  Animal.call(this, name, age, weight);
  this.purrSound = purrSound;
}

//Cat.prototype = new Animal();
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat
Cat.prototype.sleep = function() {
  console.log('the cat is sleeping');
}


var c1 = new Cat('fluffy', 2, 5, 'meowwwww');
c1.eat('burgers');
c1.sleep()
console.log(c1.constructor)

/*n
 *
function Cat(name, age, weight) {
  this.name = name;
  this.age = age;
  this.weight;
}

console.log(Cat.prototype);

Cat.prototype = {
  constructor: Cat,

  sleep: function() {
    console.log(this.name + ' the cat is sleeping');
  },

  eat: function() {
    console.log(this.name + ' the cat is eating ' + food);
    this.weight++;
  }
};
console.log(Cat.prototype);
var cat1 = new Cat('fluffy', 2, 5);
console.log(cat1.__proto__.constructor == Cat)
*/

function sayGreeting(greeting) {
  console.log(`${greeting} from JavaScript`);
}



