// Create the data object that this function is expecting
//
// Example
//
// printUsersWebsites(users2)
// ~~UserName1~~
//   -siteName1
//   -siteName2
// ~~UserName2~~
//   -siteName3
//   -siteName4
//   -siteName5
// ...and so forth, for all the users

// let users2 = your code here;

function printUsersWebsites (users) {
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    console.log("~~" + user.username + "~~");

    for (let j = 0; j < user.sites.length; j++) {
      let site = user.sites[j];
      console.log("  -" + site.url);
    }
  }
}

// printUsersWebsites(users2); // uncomment when ready to test
