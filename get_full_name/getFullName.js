// Write a function `getFullname(person)` that takes in an person object and returns
// a string containing their full name.
//
// Examples:
//
// var p1 = {firstName: 'John', lastName: 'Doe'};
// getFullname(p1); // => 'John Doe'
//
// var p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
// getFullname(p2); // => 'Charlie Brown'

function getFullName(person) {
  return person.firstName + ' ' + person.lastName;
}
