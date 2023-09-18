/*
There are multiple ways to calculate the sum of an array of numbers in JavaScript. Here are five different approaches:
*/

// For Loop:
const forLoopArraySum = [1,2,3,4,5]
function arraySumForLoop(forLoopArraySum) {
    let total = 0;
    for (let i = 0; i < forLoopArraySum.length; i++) {
      total += forLoopArraySum[i];
    }
    return total;
  }
  console.log(arraySumForLoop(forLoopArraySum));