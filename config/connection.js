var mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Agar112405",
    database: "crud_note_taker_db"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
});


module.exports = connection;