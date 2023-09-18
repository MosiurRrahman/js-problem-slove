/*
There are multiple ways to calculate the sum of an array of numbers in JavaScript. Here are five different approaches:
*/

// For Loop:
const arraySum = [1, 2, 3, 4, 5]
function arraySumForLoop(arraySum) {
    let total = 0;
    for (let i = 0; i < arraySum.length; i++) {
        total += arraySum[i];
    }
    return total;
}
console.log("array sum forloop = ", arraySumForLoop(arraySum));



//   fforEach() Method:
// You can use the forEach method to iterate through the array and accumulate the sum.


function arraySumForEach(arraySum) {
    let total = 0;
    arraySum.forEach(function (num) {
        total += num;
    });
    return total;
}
console.log("array sum forech = ", arraySumForEach(arraySum));


//   Using a for...of Loop:
// A modern approach is to use a for...of loop to iterate through the array.

function arraySumForOf(arraySum) {
    let total = 0;
    for (let num of arraySum) {
        total += num;
    }
    return total;
}
console.log("array sum for of = ", arraySumForOf(arraySum));


//   Recursion:
//   You can calculate the sum of an array using a recursive function.

function arraySumRecursion(arraySum) {
    if (arraySum.length === 0) {
        return 0;
    }
    return arraySum[0] + arraySumRecursion(arraySum.slice(1));
}
console.log("array sum Recursion = ", arraySumRecursion(arraySum));


//   Using the eval() Function (not recommended for security reasons):
// This method converts the array elements to a string and evaluates it. Note that using eval() is generally discouraged due to security risks.

function arraySumeval(arraySum) {
    const evalString = arraySum.join('+');
    return eval(evalString);
}
console.log("array sum eval = ", arraySumeval(arraySum));


//   array reduce

function arraySumReducer(arraySum) {
    // return arraySum.reduce((total, current) => total + current, 0);
    return arraySum.reduce(function (current, total) {
        return current + total
    }, 0);
}


console.log("array sum reducer = ", arraySumReducer(arraySum)); // Output: 15
