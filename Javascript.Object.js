// Attribue une valeur par défaut pour toutes les propriétés d'une objet qui sont undefined
const deepFlatten = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]

// retourne la premiere key qui satisfasse la fonction donnée
const findKey = (obj, fn) =>
  Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o["active"]
); // 'barney'

// itere sur chaque propriété d 'un object et lance une fonction sur chaque
const forOwn = (obj, fn) =>
  Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: "bar", a: 1 }, v => console.log(v)); // 'bar', 1

// Compare 2 object et verifie si le 1Er contient les memes propriété en partie au moins , que le 2em

const matches = (obj, source) =>
  Object.keys(source).every(
    key => obj.hasOwnProperty(key) && obj[key] === source[key]
  );

matches({ age: 25, hair: "long", beard: true }, { hair: "long", beard: true }); // true
matches({ hair: "long", beard: true }, { age: 25, hair: "long", beard: true }); // false
