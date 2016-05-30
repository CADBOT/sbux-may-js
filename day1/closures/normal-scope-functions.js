function outer() {
  var inner;
  var x = 10;
  console.log('in outer');
  inner = function() {
    console.log('in inner');
    console.log(x);
  }
}

var pointer = outer();
pointer();
