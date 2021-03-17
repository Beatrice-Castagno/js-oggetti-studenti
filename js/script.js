/* Creare un oggetto che descriva uno studente,
con le seguenti proprietà: nome, cognome e età. */

var studente = {
  nome: "Sheldon",
  cognome: "Cooper",
  eta: 30
};

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studente) {
  console.log(key);
}

// Creare un array di oggetti di studenti.

var studenti = [
 {
   "nome" : "Marco",
   "cognome" : "Rossi",
   "eta" : 18
 },

 {
   "nome" : "Paola",
   "cognome" : "Verdi",
   "eta" : 16
 },

 {
   "nome" : "Fabio",
   "cognome" : "Bianchi",
   "eta" : 15
 },
];

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.


for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome + " " + studenti[i].cognome);
}

/* Dare la possibilità all’utente, attraverso 3 prompt(),
di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

var nuovoStudente = {};

var nomeStudente = prompt("Inserire nome");
var cognomeStudente = prompt("Inserire cognome");
var etaStudente = parseInt(prompt("Inserire l'età"));

if (isNaN(etaStudente)) {
  etaStudente = parseInt(prompt("Inserire l'età in numero, grazie."));
}

nuovoStudente.nome = nomeStudente;
nuovoStudente.cognome = cognomeStudente;
nuovoStudente.eta = etaStudente;

studenti.push(nuovoStudente);

for (var key in nuovoStudente) {
  console.log(key + " " + nuovoStudente[key]);
}

// console.log(nuovoStudente["nome"] + " " + nuovoStudente["cognome"] + " " + nuovoStudente["eta"]);
