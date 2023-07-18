let numbers: number[] = [1, 2, 3, 4, 5];

// Intentional error: Accessing an invalid index
console.log(numbers[5]);  // This will cause an "IndexError"

// Corrected code: Accessing a valid index
console.log(numbers[4]);  // Output: 5
