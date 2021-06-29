const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res ) => {
    res.send("This is me responding from the back end 😀")
})

app.listen(PORT , ()=> {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})