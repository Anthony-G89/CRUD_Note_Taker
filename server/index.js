const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const routes = require("../controllers/noteController.js");
app.use(routes);


// const Title = req.body.notetitle;
// const Body = req.body.noteBody;

// const sqlInsert = "INSERT INTO notes (Title, Body) VALUES (? , ?)";
// connection.query(sqlInsert, [Title, Body], (err, result) => {
//     console.log(err);
// })




app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});