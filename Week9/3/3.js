const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const number of numbers) {
    if (number % 2 !== 0) {
        continue;
    }
    console.log(number);
}