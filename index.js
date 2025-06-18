const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    // Split the tutorial string into words.
    // We do NOT convert the entire string to lowercase initially
    // to preserve the casing of acronyms/specific terms like OO, API, NaN.
    const words = tutorial.split(' ');

    // Map over each word to capitalize its first letter while preserving the rest of its original casing.
    const titleCasedWords = words.map(word => {
      // Handle empty strings that might result from multiple spaces if any.
      if (word.length === 0) {
        return '';
      }
      // Capitalize the first letter and concatenate with the rest of the word
      // (from the original word's casing, not lowercased).
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join the title-cased words back into a single string.
    return titleCasedWords.join(' ');
  });
};
