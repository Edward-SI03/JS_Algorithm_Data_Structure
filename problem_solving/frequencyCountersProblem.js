function anagrams(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  let frequency1 = {};
  for (let val in word1) {
    let letter = word1[val];
    frequency1[letter] ? (frequency1[letter] += 1) : (frequency1[letter] = 1);
  }
  console.log(frequency1);

  for (let key in word2) {
    let letter = word2[key];
    if (!frequency1[letter]) {
      return false;
    } else {
      frequency1[letter] -= 1;
    }
  }
  console.log(true);
  return true;
}

anagrams("cat", "tca");
