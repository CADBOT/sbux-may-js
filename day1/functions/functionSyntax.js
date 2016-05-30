function hello() {
  console.log('hello')
}

var goodbye = function() {
  console.log('goodbye')
};

var hello2 = hello;

hello2();

function add(x, y) {
  return x + y;
}

var firstNum = 4;
//var secondNum = 10;

add(firstNum, 10);

function callTwice(cb) {
  console.log('executing callback');
  cb();
  cb();
}

caller(function() {
  console.log('inside callback');
});









