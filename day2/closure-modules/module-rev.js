var protectedNumber = (function() {
  var _number = 1;

  function getNumber() {
    return _number;
  }

  function incrementNumber() {
    _number++;
  }

  return {
    getNumber: getNumber,
    incrementNumber: incrementNumber
  }

})();
