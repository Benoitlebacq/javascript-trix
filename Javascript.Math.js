// Vérifie si 2 nombres sont approximativement égaux
const approximatelyEqual = (v1, v2, epsilon = 0.001) =>
  Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true

// retourne la moyenne d'une liste de valeurs
const average = (...nums) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2

// retourne la moyenne d 'une lite dans un array aprés avoir effectué une fonction
const averageBy = (arr, fn) =>
  arr
    .map(typeof fn === "function" ? fn : val => val[fn])
    .reduce((acc, val) => acc + val, 0) / arr.length;

averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([1, 4], x => x + 5); // 7.5

// converti une valeur en degrés , en radian et voce versa
const degreesToRads = deg => (deg * Math.PI) / 180.0;
degreesToRads(90.0); // ~1.5708

const radsToDegrees = rad => (rad * 180.0) / Math.PI;
radsToDegrees(Math.PI / 2); // 90

// retourne la distance euclidienne entre 2 points
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
distance(1, 1, 2, 3); // 2.23606797749979

// créée un random entier ou nombre dans l'interval spécifié

const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
randomIntegerInRange(0, 5); // 3

const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;
randomNumberInRange(2, 10); // 6.0211363285087005

// Arrondir a un dégrés voulu

const round = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
round(1.005, 2); // 1.01

// Obtenr N elements a positions uniques d'un array et le mettre dans un autre array , avec un maximum size de l'array original
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
