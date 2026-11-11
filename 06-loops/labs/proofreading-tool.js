function isPalindrome(word) {
  const normalized = word.toLowerCase();
  const reversed = normalized.split("").reverse().join("");

  return normalized === reversed;
}

function findPalindromeBreaks(words) {
  const breaks = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }

  return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
  const repeated = [];

  if (phraseLength >= words.length || phraseLength <= 0) {
    return repeated;
  }

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");

    for (let j = i + 1; j <= words.length - phraseLength; j++) {
      const comparison = words.slice(j, j + phraseLength).join(" ");

      if (phrase === comparison) {
        if (!repeated.includes(i)) {
          repeated.push(i);
        }

        if (!repeated.includes(j)) {
          repeated.push(j);
        }
      }
    }
  }

  return repeated.sort((a, b) => a - b);
}

function analyzeTexts(texts, phraseLength) {
  const results = [];

  for (let i = 0; i < texts.length; i++) {
    const words = texts[i];

    results.push({
      repeatedPhrases: findRepeatedPhrases(words, phraseLength),
      palindromeBreaks: findPalindromeBreaks(words)
    });
  }

  return results;
}
