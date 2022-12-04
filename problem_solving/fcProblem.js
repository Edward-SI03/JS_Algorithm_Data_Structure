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

// anagrams("cat", "tca");

function sameNum(n1, n2) {
  if (String(n1).length !== String(n2).length) {
    return false;
  }
  let obj1 = {};

  for (let i in String(n1)) {
    let n = String(n1)[i];
    obj1[n] ? obj1[n]++ : (obj1[n] = 1);
  }

  for (let i in String(n2)) {
    let n = String(n2)[i];
    if (!obj1[n]) {
      return false;
    } else {
      obj1[n]--;
    }
  }
  console.log(obj1);
  console.log(true);
  return true;
}

sameNum(1821, 1281);
