// Chiedi all’utente il cognome,
  var inserisciCognome = prompt('inserisci il tuo cognome');
// inseriscilo in un array con altri cognomi,
  var cognomi = ['Arimatea', 'Rossi', 'Denaro', 'Puleo'];
  while (inserisciCognome.length <= 0) {
     var inserisciCognome = prompt('inserisci cognome');
  }
  cognomi.push(inserisciCognome);
  cognomi.sort();
  console.log(cognomi);
// stampa la lista ordinata alfabeticamente (in html ul > li).
  for (var i = 0; i < cognomi.length; i++) {
    document.getElementById('cognomi_utenti').innerHTML += '<li>' + cognomi[i] + '</li>';
  }
// Scrivi anche la posizione della lista in cui il nuovo utente si trova.
  var posizioneCognome = (cognomi.indexOf(inserisciCognome) + 1 );
  document.getElementById('Posizione').innerHTML = (posizioneCognome) ;
