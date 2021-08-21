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


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
    });
  }


app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

