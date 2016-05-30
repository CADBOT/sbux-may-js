var array = [5, 10, 16, 4];

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

array.forEach(function(value) {
  console.log(value);
});

function logger(value) {
  console.log(value)
}
array.forEach(logger);

forEach([5, 10, 16, 4], function(value) {
  console.log('value');
});

function forEach(collection, cb) {
  for (var i = 0; i < collection.length; i++) {
    cb(collection[i]);
  }
}

forEach([1, 2, 3], function(element) {
  console.log(element);
});
