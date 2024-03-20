import sqlite from 'sqlite3'

const db = new sqlite.Database('./questions.sqlite', (err) => {if(err) throw err})

db.all("SELECT * FROM user", (err, rows) => {
    if (err) throw err; // gestione dell'errore come ogni funzione asincrona
   rows.forEach((r) =>{console.log(r.name)}) 

})

db.each("SELECT * FROM user", (err, rows) => {
    if (err) throw err; // gestione dell'errore come ogni funzione asincrona
   
    console.log(rows.id, rows.name);
})

let userId = 3

db.get("SELECT * FROM user WHERE id = ?", [userId], (err, rows) => {
   if(err) throw err;

    console.log("USER IS " + rows.name)
}) // non dobbiamo fare questo 