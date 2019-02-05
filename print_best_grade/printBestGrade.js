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

// Write a function that will print the name of the student and their highest test score
// Example:
//
// printBestGrade(students3)
// Anthony 84
// Winnie 100
// Pawandeep 92

function highestScore(array) {
  let highest = 0;

  for (let i = 0; i < array.length; i++) {
    let grades = array[i];

    if (grades.score > highest) {
      highest = grades.score;
    }
  }

  return highest;
}

function printBestGrade(students) {
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let name = student.name;
    let grades = highestScore(student.grades);
    console.log(name + ' ' + grades);
  }
}
