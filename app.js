function anagram(words) {
    return Object.values(
      words.reduce((acc, word) => {
        const sortedWord = word.split('').sort().join('');
        if (!acc[sortedWord]) {
          acc[sortedWord] = [];
        }
        acc[sortedWord].push(word);
        return acc;
    }, {})
  );
  }
  console.log(anagram(['bat', 'tap', 'cat', 'tab', 'pat']));
  