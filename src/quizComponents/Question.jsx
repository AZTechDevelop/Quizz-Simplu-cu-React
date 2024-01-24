
const questions = [
  {
    question: 'Care este capitala Albaniei?',
    options: ['Tirana', 'Skopje', 'Podgorica', 'Belgrad'],
    correctAnswer: 'Tirana',
  },
  {
    question: 'Care este capitala Andorrei?',
    options: ['Andorra la Vella', 'La Valletta', 'Nicosia', 'Monaco'],
    correctAnswer: 'Andorra la Vella',
  },
  {
    question: 'Care este capitala Belarusului?',
    options: ['Minsk', 'Kiev', 'Vilnius', 'Riga'],
    correctAnswer: 'Minsk',
  },
  {
    question: 'Care este capitala Belgiei?',
    options: ['Bruxelles', 'Amsterdam', 'Luxemburg', 'Paris'],
    correctAnswer: 'Bruxelles',
  },
  {
    question: 'Care este capitala Bosniei și Herțegovina?',
    options: ['Sarajevo', 'Belgrad', 'Podgorica', 'Zagreb'],
    correctAnswer: 'Sarajevo',
  },
  {
    question: 'Care este capitala Cehiei?',
    options: ['Praga', 'Varșovia', 'Budapesta', 'Berlin'],
    correctAnswer: 'Praga',
  },
  {
    question: 'Care este capitala Ciprului?',
    options: ['Nicosia', 'Atena', 'Sofia', 'București'],
    correctAnswer: 'Nicosia',
  },
  {
    question: 'Care este capitala Ciprului de Nord?',
    options: ['Lefkoșa', 'Ankara', 'Damasc', 'Beirut'],
    correctAnswer: 'Lefkoșa',
  },
  {
    question: 'Care este capitala Croației?',
    options: ['Zagreb', 'Belgrad', 'Sarajevo', 'Ljubljana'],
    correctAnswer: 'Zagreb',
  },
  {
    question: 'Care este capitala Danemarcei?',
    options: ['Copenhaga', 'Oslo', 'Stockholm', 'Helsinki'],
    correctAnswer: 'Copenhaga',
  },
  {
    question: 'Care este capitala Elveției?',
    options: ['Zurich', 'Bern', 'Geneva', 'Basel'],
    correctAnswer: 'Bern',
  },
  {
    question: 'Care este capitala Finlandei?',
    options: ['Helsinki', 'Oslo', 'Stockholm', 'Copenhaga'],
    correctAnswer: 'Helsinki',
  },
  {
    question: 'Care este capitala Franței?',
    options: ['Berlin', 'Londra', 'Paris', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Care este capitala Germaniei?',
    options: ['Viena', 'Berlin', 'Praga', 'Budapesta'],
    correctAnswer: 'Berlin',
  },
  {
    question: 'Care este capitala Greciei?',
    options: ['Atena', 'București', 'Sofia', 'Nicosia'],
    correctAnswer: 'Atena',
  },
  {
    question: 'Care este capitala Irlandei?',
    options: ['Dublin', 'Edinburgh', 'Londra', 'Cardiff'],
    correctAnswer: 'Dublin',
  },
  {
    question: 'Care este capitala Islandei?',
    options: ['Reykjavik', 'Oslo', 'Copenhaga', 'Helsinki'],
    correctAnswer: 'Reykjavik',
  },
  {
    question: 'Care este capitala Italiei?',
    options: ['Lisabona', 'Atena', 'Roma', 'Dublin'],
    correctAnswer: 'Roma',
  },
  {
    question: 'Care este capitala Letoniei?',
    options: ['Vilnius', 'Riga', 'Tallinn', 'Helsinki'],
    correctAnswer: 'Riga',
  },
  {
    question: 'Care este capitala Liechtensteinului?',
    options: ['Bern', 'Vaduz', 'Vienna', 'Zurich'],
    correctAnswer: 'Vaduz',
  },
  {
    question: 'Care este capitala Lituaniei?',
    options: ['Kaunas', 'Tallinn', 'Vilnius', 'Riga'],
    correctAnswer: 'Vilnius',
  },
  {
    question: 'Care este capitala Luxemburgului?',
    options: ['Amsterdam', 'Bruxelles', 'Luxemburg', 'Paris'],
    correctAnswer: 'Luxemburg',
  },
  {
    question: 'Care este capitala Macedoniei de Nord?',
    options: ['Belgrad', 'Sofia', 'Skopje', 'Podgorica'],
    correctAnswer: 'Skopje',
  },
  {
    question: 'Care este capitala Maltei?',
    options: ['La Valletta', 'Nicosia', 'Roma', 'Tunis'],
    correctAnswer: 'La Valletta',
  },
  {
    question: 'Care este capitala Republicii Moldova?',
    options: ['București', 'Chișinău', 'Odessa', 'Tiraspol'],
    correctAnswer: 'Chișinău',
  },
  {
    question: 'Care este capitala Monacoului?',
    options: ['Nice', 'Monaco', 'Marsilia', 'Lyon'],
    correctAnswer: 'Monaco',
  },
  {
    question: 'Care este capitala Muntenegrului?',
    options: ['Podgorica', 'Belgrad', 'Zagreb', 'Sarajevo'],
    correctAnswer: 'Podgorica',
  },
  {
    question: 'Care este capitala Norvegiei?',
    options: ['Oslo', 'Copenhaga', 'Stockholm', 'Helsinki'],
    correctAnswer: 'Oslo',
  },
  {
    question: 'Care este capitala Poloniei?',
    options: ['Varșovia', 'Cracovia', 'Varșovia', 'Berlin'],
    correctAnswer: 'Varșovia',
  },
  {
    question: 'Care este capitala Portugaliei?',
    options: ['Lisabona', 'Madrid', 'Roma', 'Paris'],
    correctAnswer: 'Lisabona',
  },
  {
    question: 'Care este capitala Regatului Unit?',
    options: ['Dublin', 'Edinburgh', 'Londra', 'Cardiff'],
    correctAnswer: 'Londra',
  },
  {
    question: 'Care este capitala României?',
    options: ['București', 'Sofia', 'Budapesta', 'Belgrad'],
    correctAnswer: 'București',
  },
  {
    question: 'Care este capitala Rusiei?',
    options: ['Kiev', 'Minsk', 'Varșovia', 'Moscova'],
    correctAnswer: 'Moscova',
  },
  {
    question: 'Care este capitala San Marino?',
    options: ['Roma', 'San Marino', 'Florența', 'Veneția'],
    correctAnswer: 'San Marino',
  },
  {
    question: 'Care este capitala Serbiei?',
    options: ['Podgorica', 'Belgrad', 'Zagreb', 'Sarajevo'],
    correctAnswer: 'Belgrad',
  },
  {
    question: 'Care este capitala Slovaciei?',
    options: ['Bratislava', 'Praga', 'Budapesta', 'Viena'],
    correctAnswer: 'Bratislava',
  },
  {
    question: 'Care este capitala Sloveniei?',
    options: ['Ljubljana', 'Zagreb', 'Belgrad', 'Sarajevo'],
    correctAnswer: 'Ljubljana',
  },
  {
    question: 'Care este capitala Spaniei?',
    options: ['Barcelona', 'Lisabona', 'Madrid', 'Roma'],
    correctAnswer: 'Madrid',
  },
  {
    question: 'Care este capitala Statului Papal?',
    options: ['Roma', 'Veneția', 'Florența', 'Città del Vaticano'],
    correctAnswer: 'Città del Vaticano',
  },
  {
    question: 'Care este capitala Suediei?',
    options: ['Oslo', 'Helsinki', 'Stockholm', 'Copenhaga'],
    correctAnswer: 'Stockholm',
  },
  {
    question: 'Care este capitala Turciei?',
    options: ['Istanbul', 'Ankara', 'Atena', 'Sofia'],
    correctAnswer: 'Ankara',
  },
  {
    question: 'Care este capitala Ucrainei?',
    options: ['Varșovia', 'Kiev', 'București', 'Chișinău'],
    correctAnswer: 'Kiev',
  },
  {
    question: 'Care este capitala Ungariei?',
    options: ['Budapesta', 'Praga', 'Varșovia', 'Belgrad'],
    correctAnswer: 'Budapesta',
  },
  {
    question: 'Care este capitala Vaticanului?',
    options: ['Roma', 'Veneția', 'Milano', 'Città del Vaticano'],
    correctAnswer: 'Città del Vaticano',
  },
];

export default questions;
