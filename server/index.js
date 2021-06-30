const express = require("express");
const app = express();
// const router = express.Router();
const PORT = process.env.PORT || 3001;
const mysql = require("mysql");




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
    connection.end();
});

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Test Test");
});

// POST NOTE
app.post("/api/notes", (req, res) => {

    const Title = req.body.notetitle;
    const Body = req.body.noteBody;

    const sqlInsert = "INSERT INTO notes (Title, Body) VALUES (? , ?)";
    connection.query(sqlInsert, [Title, Body], (err, result) => {
        console.log(err);
    })
});



app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});