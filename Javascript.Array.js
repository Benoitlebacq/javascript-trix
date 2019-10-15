// retourne true si l'ensemble des elements sont vrais
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true

// Verifie si tous les elemnts sont égaux
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true

// Retourne un Array avec les elements communs a 2 arrays
const similarity = (arr, values) => arr.filter(v => values.includes(v));
similarity([1, 2, 3], [1, 2, 4]); // [1, 2]

// converti les element en string separées par un limiteur comme au format CSV
const arrayToCSV = (arr, delimiter = ",") =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join("\n");

arrayToCSV([["a", "b"], ["c", "d"]]); // '"a","b"\n"c","d"'
arrayToCSV([["a", "b"], ["c", "d"]], ";"); // '"a";"b"\n"c";"d"'

// Converti les elements d'un array en <li> et leur donne l'ID souhaité
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector("#" + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(""))
  ))();

arrayToHtmlList(["item 1", "item 2"], "myListID");

// separe les valeurs en 2 groupes , basé sur un fonction qui predit si elle est true ou false
// Si true placée dans le 1er groupe sinon dans le 2em
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [
    [],
    []
  ]);

bifurcateBy(["beep", "boop", "foo", "bar"], x => x[0] === "b");
// [ ['beep', 'boop', 'bar'], ['foo'] ]

// Converti une valeur non-array en array
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray("foo"); // ['foo']
castArray([1]); // [1]

// Eneleve les valeurs false d'un array
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]);
// [ 1, 2, 3, 'a', 's', 34 ]

// Compte les occurences d'une valeur dans un array
const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3

// Applati un array de maniere récursive
const deepFlatten = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]

// trouve la différence entre 2 Array

const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]

// Trouve la diff entre 2 array aprés avoir appliqué une fonction
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]

// eneleve la valeur pour laquelle la fonction qui compare retourne false
const differenceWith = (arr, val, comp) =>
  arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0],
  (a, b) => Math.round(a) === Math.round(b)
);
// [1, 1.2]

// Prends un nombre entier en input et retourne un array de ses valeurs unitaires en output
const digitize = n => [...`${n}`].map(i => parseInt(i));
digitize(431); // [4, 3, 1]

// Retourne un array avec N elements enlevé depuis le debut / la fin

const take = (arr, n = 1) => arr.slice(0, n);
take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []

const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);
takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]

// retourne un taleau où n elements on été enlevé depuis la gauche ou la droite

const dropLeft = (arr, n = 1) => arr.slice(n);
dropLeft([1, 2, 3]); // [2,3]
dropLeft([1, 2, 3], 2); // [3]
dropLeft([1, 2, 3], 42); // []

const dropRight = (arr, n = 1) => arr.slice(0, -n);
dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []

// Enleve les elements d'un tableau depuis la droite ou la gauche jusqu'a ce qu'une fonction retourne true
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]

const dropLeftWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropLeftWhile([1, 2, 3, 4], n => n >= 3); // [3,4]

// Retire les doublons d'un array
const filterNonUnique = arr =>
  arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]

// retournel le derniere element pour lequel une fonction donnée retourne true
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3

// Applati un array jusqu'a une profondeur donéee
const flatten = (arr, depth = 1) =>
  arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]

// excecute une fonction pour chaque element d'un array en partant du derniere element
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);

forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'

// Retourne tous les indexes d'une valeur dans un array et un array vide si la valeur n'est pas inclue
const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []

// retourne tous les elements d 'un array sauf le dernier
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]

// Retourne le dernier element d'un array
const last = arr => arr[arr.length - 1];
last([1, 2, 3]); // 3

// retourne tous les elements d 'un array sauf le premier , si l array n'a qu'un element alors il est retourné
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);
tail([1, 2, 3]); // [2,3]
tail([1]); // [1]

// retourne un array avec les elements qui sont inclue dans 2 arrays qu'on compare
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]

// retourne un arry avec les elements qui sont inclue dans les 2 arrays qu'on compare aprés avoir appliqué une fonction sur ceux ci
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4, 1.3], Math.floor); // [2.1, 1.2]

// retourne une list d 'element qui existe dans les 2 array en utilisant une fonction comparative
const intersectionWith = (a, b, comp) =>
  a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9],
  (a, b) => Math.round(a) === Math.round(b)
); // [1.5, 3, 0]

// Retourne l N plus grand element d'une list, si N est >= a la longeur de la list alors ca retourne la liste original classé en ordre descendant
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]

// retourne les N plus petit elements d 'une liste, Si N est plus grand ou egal a la longueur de la liste alors ça retourne la liste classé pzr ordre ascendant
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]

// Créée un Array avec N random nombre dans un  interval spécifique
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]

// Melange tous les elements d 'un array en utilisantnl'agorithm de Fisher-Yates
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]

// Somme des elemnts dans un array
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);
sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10

// Unir 2 arrays , sans elements repetés
const union = (a, b) => Array.from(new Set([...a, ...b]));
union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]

// Retourne un array d 'elements uniques, supprime les doublons
const uniqueElements = arr => [...new Set(arr)];
uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
