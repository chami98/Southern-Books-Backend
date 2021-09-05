// eg : abcd => ['a', 'ab', 'abc', 'abcd']
// eg2 : xyz => ['x', 'xy', 'xyz']
const wordToKeys = (word) => {
  const keys = [];
  for (var i = 1; i <= word.length; i++) {
    keys.push(word.slice(0,i))
  }
  
  return keys;
}

// ['abcd', 'xyz']
const concatKeys = (words) => {
  let cocatedKeys = [];
  
  
  words.forEach(word => {
    cocatedKeys = cocatedKeys.concat(wordToKeys(word))
    
    words.forEach(otherWord => {
      if(word === otherWord) return;
      
      cocatedKeys = cocatedKeys.concat(concatWordWithKeys(otherWord, wordToKeys(word)))
    })
    
  })
  
  return cocatedKeys;
}

// eg2 : keys => ['x', 'xy', 'xyz']
// word => 'abcd'
// ['abcd x', ....]
const concatWordWithKeys = (word, keys) => {
  return keys.map(key => `${word} ${key}`)
}


const nameToKeywords = (name) => {
  const words = name.toLowerCase().trim().split(" ");
  
  return concatKeys(words)
}

module.exports = nameToKeywords;