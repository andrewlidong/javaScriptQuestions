// var students1 = [
//   { name : "Anthony" },
//   { name : "Winnie" },
//   { name : "Pawandeep" }
// ];

// Write a function that will print the name of all the students
// Example:
//
// printNames(students1)
// Anthony
// Winnie
// Pawandeep

function printNames(students) {
  for (let i = 0; i < students.length; i++) {
    let student = students[i];

    console.log(student.name);
  }
}
