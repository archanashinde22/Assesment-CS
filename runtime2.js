// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// For example:

let addToZero = (numArr) => {
  for (i = 0; i < numArr.length; i++) {
    for (j = i + 1; j < numArr.length; j++) {
      if (numArr[i] + numArr[j] === 0) {
        return true;
      }
    }
  }
  return false;
};

//Run : O(n^2)
//space O(1)

// console.log(addToZero([1,2,3,-2]))
// // -> False

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
const hasUniqueChars = (word) => {
  let wordSet = new Set(word.split(""));
  wordSet.size === word.length ? console.log(true) : console.log(false);
};

// RUN O(1)
// space(1)

// For example:

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False
// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.
const isPangram = (str) => {
  let arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  str = str.toLocaleLowerCase().split("").sort().join("").trim();
  for (let i = 0; i < arr.length; i++) {
    if (!str.includes(arr[i])) {
      return console.log(false);
    }
  }
  return console.log(true);
};

// RUN : O(n)
// space : O(1)
// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // // // -> True

// isPangram("I like cats, but not mice");
// // -> False
// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

const findLongestWord = (wordarr) => {
  let length = 0;
  for (let i = 0; i < wordarr.length; i++) {
    if (wordarr[i].length > length) {
      length = wordarr[i].length;
    }
  }
  return console.log(length);
};
// For example:

// findLongestWord(["hi", "hello"]);

// // -> 5
// Be sure to add th

//Run : O(n)
//space :O(n)
