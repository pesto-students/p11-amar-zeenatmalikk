function divideArray(numbers) {
    let evenNums = [];
    let oddNums = [];
  
    // Iterate through the input array
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNums.push(numbers[i]); // Add even number to evenNums array
      } else {
        oddNums.push(numbers[i]); // Add odd number to oddNums array
      }
    }
  
    // Sort both arrays
    evenNums.sort((a, b) => a - b);
    oddNums.sort((a, b) => a - b);
  
    // Output array values to the console
    console.log("Even Numbers:", evenNums);
    console.log("Odd Numbers:", oddNums);
  }
  
  // Example usage
  const numbers = [5, 2, 7, 8, 1, 9, 4, 6, 3];
  divideArray(numbers);
  