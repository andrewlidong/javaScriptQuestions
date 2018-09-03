// Create the data object that this function is expecting
//
// Example
//
// printUsers(users1)
// 0: UserName1
// 1: UserName2
// ...and so forth, for all the users

function printUsers(users) {
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    console.log(user.id + ': ' + user.username);
  }
}
