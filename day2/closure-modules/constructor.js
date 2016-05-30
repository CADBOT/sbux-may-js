'use strict'
function Person(name, age) {
  // secret code section 1
  //var this = {}; 
  // end secret code section 1
  var secret = 'super secret';
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log('Hello my name is ' + this.name)
  }
  this.getSecret = function() {
    return secret;
  }
  // secret code section 2
  //return this; 
  // end secret code section 2
}

var peter = new Person('peter', 30);
var p2 = new Person('beth', 15);
p2.greet();
console.log(p2.getSecret());

