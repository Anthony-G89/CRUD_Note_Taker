const path = require("path");

require('dotenv').config({ path: path.resolve(process.cwd(), `../.env`) });

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const routes = require("../controllers/noteController.js");
app.use(routes);





app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});