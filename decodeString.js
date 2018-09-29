// decodeString.js
// Given an encoded string, return its corresponding decoded string.
//
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times.
// Note: k is guaranteed to be a positive integer.
//
// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

function decodeString(str) {
  let decoded = '';
  let stack = [];

  for(let i = 0; i < str.length; i++) {
    if (str[i] === ']') {
      while(stack[stack.length - 1] !== '[' && stack.length !== 0) {
        decoded = stack.pop() + decoded;
      }
      stack.pop();

      let repeats = Number(stack.pop());
      let decodedSoFar = decoded.slice();

      while(repeats > 1) {
        decoded += decodedSoFar;
        repeats --;
      }

      if(stack.length === 0) {
        break;
      } else {
        stack.push(str[i]);
      }
    }
  }

  return decoded;
}
