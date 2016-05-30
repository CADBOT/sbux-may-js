var myObject = {
  name: 'bob',
  age: 20
};

console.log(myObject.age);
console.log(myObject['age']);

var someProperty = 'age';

console.log(myObject[someProperty]);
// won't work
//console.log(myObject.someProperty.anotherProperty);

myObject.age = 50;
myObject['age'] = 60;

myObject.job = 'teacher';

var someArray = [1, 3, 5];

var person = {
  // setup various properties
  name: 'jill',
  age: 20,
  job: {
    title: 'manager',
    pay: 100000000
  }
}

console.log(person.job.title);
console.log(person['job'].title)
