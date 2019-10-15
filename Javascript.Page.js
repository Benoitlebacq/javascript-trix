// Verifie si le bas d 'une Page est visible
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight ||
    document.documentElement.clientHeight);

bottomVisible(); // true

// retourne l'URL courante
const currentURL = () => window.location.href;

currentURL(); // 'https://.....'

// Obtenir l'heure de maintenant
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"

// Obtenir le nombre de jours entre 2 dates
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);

getDaysDiffBetweenDates(new Date("2019-01-13"), new Date("2019-01-15")); // 2

// cache ou montre tous les elements choisis de la page
const hide = (...el) => [...el].forEach(e => (e.style.display = "none"));
hide(document.querySelectorAll("img")); // Hides all <img> elements on the page

const show = (...el) => [...el].forEach(e => (e.style.display = ""));
show(...document.querySelectorAll("img")); // Shows all <img> elements on the page

// verifie si une date est aprés ou avant une autre
const isAfterDate = (dateA, dateB) => dateA > dateB;
isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true

const isBeforeDate = (dateA, dateB) => dateA < dateB;
isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true

// Verifie si 2 dates sont identiques

const isSameDate = (dateA, dateB) =>
  dateA.toISOString() === dateB.toISOString();
isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true

// Obtenir la derniere date
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z

// Obtenir la premiere date
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z

// Scroll to top page
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();

// fait scroller de maniere douche l element qui est appeler, dans la fentre du browser
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: "smooth"
  });

smoothScroll("#fooBar"); // scrolls smoothly to the element with the id fooBar
smoothScroll(".fooBar"); // scrolls smoothly to the first element with a class of fooBar
