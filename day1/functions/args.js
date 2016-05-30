function person(name, age) {
  console.log('Name ' + name);
  console.log('Age ' + age);
}

person('bob', 15);
person('bob'); // person('bob', undefined);
person(); // person(undefined, undefined)

function betterPerson(name, age) {
  if (name == undefined) {
    name = 'janet';
  }
  if (age == undefined) {
    age = 35;
  }
}

function bestPerson(name, age) {
  name = name || 'janet'
  age = age || 15;
}


bestPerson('tim', 0)
