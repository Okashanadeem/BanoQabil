// Make a function receives an array and returns the sum of only the positive numbers.

function sumPositive(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    return sum;
}
let result = sumPositive([1, -2, 3, 4, -5]);
console.log(result); 