//Verifie si un repertoire existe et le créee si non
const fs = require("fs");
const createDirIfNotExists = dir =>
  !fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined;
createDirIfNotExists("test");
// creates the directory 'test', if it doesn't exist

// Verifie si l'environnement est un browser
const isBrowser = () => ![typeof window, typeof document].includes("undefined");

isBrowser(); // true (browser)
isBrowser(); // false (Node)

// Verifie si c'est un json valide

const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
