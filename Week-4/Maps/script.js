function calcWordFrequencies() {
    // Read the list of words from user input
    const input = prompt('Enter a list of words (separated by spaces):');
    
    // Split the input string into an array of words
    const words = input.split(' ');
    
    // Create a Map to store word frequencies
    const frequencies = new Map();
    
    // Count the frequency of each word
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (frequencies.has(word)) {
        frequencies.set(word, frequencies.get(word) + 1);
      } else {
        frequencies.set(word, 1);
      }
    }
    
    // Output the words and their frequencies
    frequencies.forEach((value, key) => {
      console.log(key + ': ' + value);
    });
  }
  
  // Call the function
  calcWordFrequencies();
  