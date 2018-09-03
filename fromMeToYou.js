// Write a function fromMeToYou(sentence) that returns an string where the word 'me'
// is replaced with 'you'.
// Examples:
// fromMeToYou('that made me laugh') => 'that made you laugh'
// fromMeToYou('love me or hate me') => 'love you or hate you'

function fromMeToYou(sentence) {
  sentence = sentence.split(' ');
  let result = [];

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === 'me') {
      result.push('you');
    } else {
      result.push(sentence[i]);
    }
  }

  return result.join(' ');
}
