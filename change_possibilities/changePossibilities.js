// changePossibilities(amount, amount)
//
// Write a function that, given an amount of money and an array of coin denominations, compute the number of ways to make that amount of money with coins of the available denominations.
//
// For amount=4 and denominations = [1,2,3], your program would output 4 - the number of denominations.

function changePossibilities(amount, denominations) {
  if (amount === 0) {
    return 1;
  }

  if (amount < 0 || denominations.length === 0) {
    return 0;
  }

  for (let i = 0; i < denominations.length; i++) {
    const denomination = denominations[i];
    const subAmount = amount - denomination;
    const subDenominations = denominations.slice(i);
    possibilities += changePossibilities(subAmount, subDenominations);
  }

  return possibilities;
}
