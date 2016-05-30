
function caller(cb) {
  console.log('calling function');
  cb();
}

function sayHello() {
  console.log('hello')
}

caller(sayHello)

sayHello;
sayHello();

function start(x, y, number) {
  if (number < 10) {
    // call x
    x(); 
  }
  else {
    // call y
    y();
  }
}
function sayGoodbye() {
  console.log('goodbye');
}

start(sayHello, sayGoodbye, 15)





