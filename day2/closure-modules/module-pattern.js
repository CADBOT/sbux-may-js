var person = (function() {
  var _firstName = 'Janet';
  var _lastName = 'Hill';
  var _age = 1;

  return {
    // TODO fill in the object
    getFirstName: function() { return _firstName },
    getLastName: function() { return _lastName},
    getAge: function() { return _age},
    setFirstName: function(name) {
      _firstName = name;
    },
    setAge: function(age) {
      if (age > _age) {
        _age = age;
      }
    }
  }
})();

var protectedNumber = (function() {
  var _number = 1;

  return {
    getNumber: function() {
      return _number;
    },

    incrementNumber: function() {
      _number++;
    }
  }
})();

console.log(protectedNumber);
console.log(protectedNumber.getNumber());
protectedNumber.incrementNumber();
console.log(protectedNumber.getNumber());
