var singleton = (function() {
  var _instance;

  function createInstance() {
    _instance = {
      hello: 'world'
    }
  }

  function getInstance() {
    if (!_instance) {
      createInstance();
    }
    return _instance;
  }

  return {
    getInstance: getInstance
  }

})();

var x = singleton.getInstance();
var y = singleton.getInstance();
console.log(x == y);
