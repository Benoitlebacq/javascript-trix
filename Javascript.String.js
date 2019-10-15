//  Capitalize la premiere lettre d'une string
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join("");

capitalize("fooBar"); // 'FooBar'
capitalize("fooBar", true); // 'Foobar'

// Capitalize chaque mots d'une string
const capitalizeEveryWord = str =>
  str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord("hello world!"); // 'Hello World!'

// retourne une string décapitalisé, enleve la premiere lettre capitale
const decapitalize = ([first, ...rest]) => first.toLowerCase() + rest.join("");

decapitalize("FooBar"); // 'fooBar'
decapitalize("FooBar"); // 'fooBar'

// Verifie si 2 strings sont des anagrames :
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, "")
      .split("")
      .sort()
      .join("");
  return normalize(str1) === normalize(str2);
};

isAnagram("iceman", "cinema"); // true

// Pour entourer une string avec un charactere specifique is la string est plus petite que la longueur specifiée
const pad = (str, length, char = " ") =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);

pad("cat", 8); // '  cat   '
pad(String(42), 6, "0"); // '004200'
pad("foobar", 3); // 'foobar'

// classe les lettres d'une string
const sortCharactersInString = str =>
  [...str].sort((a, b) => a.localeCompare(b)).join("");
sortCharactersInString("cabbage"); // 'aabbceg'

// converti une string en Array de mots
const words = (str, pattern = /[^a-zA-Z-]+/) =>
  str.split(pattern).filter(Boolean);
words("I love javaScript!!"); // ["I", "love", "javaScript"]
words("python, javaScript & coffee"); // ["python", "javaScript", "coffee"]
