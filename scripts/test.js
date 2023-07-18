function removeSymbols(inputString) {
  const processedString = inputString
    .replace(/[^a-zA-Z\s]/g, "")
    .replace(/\s+/g, " ")
    .toLowerCase();
  return processedString;
}

function firstUniqChar(string) {
  for (i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
      return string[i];
    }
  }
  return -1;
}

const inputString =
  "C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup";
const processedString = removeSymbols(inputString);

const wordsArr = processedString.split(" ");

let lettersString = "";

wordsArr.forEach((string) => {
  const letter = firstUniqChar(string);
  if (letter !== -1) {
    lettersString = lettersString + letter;
  }
});

const result = firstUniqChar(lettersString);

console.log(result);
