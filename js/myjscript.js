var nome=prompt ("scrivi il tuo nome");

console.log("nome utente", nome);

var cognome=prompt("scrivi il tuo cognome");

console.log("cognome utente", cognome);

var colore= prompt("qual è il tuo colore preferito?");

console.log("colore preferito utente", colore);

document.getElementById('password').innerHTML = "Questa è la tua nuova password: " + nome + cognome + colore;
