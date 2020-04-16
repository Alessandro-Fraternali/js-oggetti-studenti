$(document).ready(function(){

  // - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
  console.log("Studente esempio:");
  var pory = {
    "nome": "Salvatorte",
    "cognome": "Formaggio",
    "età": 4
  }

  // -Stampare a schermo attraverso il for in tutte le proprietà;
    for(var key in pory){
        console.log(pory[key]);
    }
    console.log("Lista degli studenti:");

  // - Creare un array di oggetti di studenti.
  var studenti = [
    {
      "nome": "Gianfranco",
      "cognome": "Giangiorgio",
      "età": 10
    },
    {
      "nome": "Banano",
      "cognome": "Baglioni",
      "età": 12
    },
    {
      "nome": "Stegosandro",
      "cognome": "Scottecs",
      "età": 15
    },
    {
      "nome": "Falsolippo",
      "cognome": "Zabaione",
      "età": 9
    },
  ];

  // -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
    for(var i = 0; i < studenti.length; i++){
        console.log(studenti[i].nome + " " + studenti[i].cognome + " " + studenti[i].età + " anni");
    }
    console.log("Lista studenti aggiornata:");

  // - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo
  // oggetto studente inserendo nell’ordine: nome, cognome e età.

  studenti.push({
    "nome": prompt("Inserisci nome"),
    "cognome": prompt("Inserisci cognome"),
    "età": parseFloat(prompt("Inserisci età"))
  });

  // ristampo la lista studenti e aggiungo quello dell'utente
  for(var i = 0; i < studenti.length; i++){
        console.log(studenti[i].nome + " " + studenti[i].cognome + " " + studenti[i].età + " anni");
    }
})
