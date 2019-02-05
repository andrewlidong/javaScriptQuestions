// Sort the letters in a string s by the order they occur in the string t.
// You can assume that t will not have repetitive characters.
// For s = "weather" and t = "therapw" the output should be sortByString(s,t) = "theraw".  For s = "weaether" and t = "odg", the output should be sortByString(s, t) = "oodg"


function sortByStrings(s,t) {
  let order = findOrder(t);

  return qSort(s, comparator);
}

function findOrder(str) {
  const resultHsh = {};
  for(let i = 0; i < str.length; i++) {
    resultHsh[str[i]] = i;
  }

  return resultHsh;
}

function comparator(a, b) {
  if (order[x] < order[y]) {
    return -1;
  } else if (order[x] === order[y]) {
    return 0;
  } else if (order[x] > order[y]){
    return 1;
  }
}

function qSort(str, comparator) {
  if (str.length === 0) {
    return str;
  }

  let pivot = str[0];
  let left = '';
  let right = '';

  for (let i = 1; i < str.length; i++) {
    let letter = str[i];

    if (comparator(letter, pivot) === -1) {
      left += letter;
    } else {
      right += letter;
    }
  }

  return qSort(left, comparator) + pivot + qSort(right, comparator);
}
