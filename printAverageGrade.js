// var students3 = [
//   {
//     name : "Anthony",
//     id : 0,
//     grades : [{ id : 0, score : 84},{ id : 1, score : 20},{ id : 2, score : 80}]
//   }, {
//     name : "Winnie",
//     id : 1,
//     grades : [{ id : 0, score : 62},{ id : 1, score : 56},{ id : 2, score : 100}]
//   }, {
//     name : "Pawandeep",
//     id : 2,
//     grades : [{ id : 0, score : 79},{ id : 1, score : 92},{ id : 2, score : 49}]
//   }
// ];

// Write a function that will print the name of the student and their average test score
//
// Example
//
// printAverageGrade(students3)
// Anthony 61.333333333333336
// Winnie 72.66666666666667
// Pawandeep 73.33333333333333

function avgScore(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let grades = array[i];
    sum += grades.score;
  }

  return sum / array.length;
}

function printAverageGrade(students) {
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let name = student.name;
    let avg = avgScore(student.grades);
    console.log(name + ' ' + avg);
  }
}
