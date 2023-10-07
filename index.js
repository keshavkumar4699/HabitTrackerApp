const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");
const dotenv = require('dotenv').config();

//set the port for website
const port = process.env.PORT;

//setup static files folder
app.use(express.static("./assets"));

//setup express layouts
app.use(expressLayouts);

//to encode body in url after getting response
app.use(express.json);
app.use(express.urlencoded({ extended: true }));

//put scripts and styles from pages to layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//set the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//setup express router
app.use("/", require("./routes/index_router.js"));

//liten function
app.listen(port, (err) => {
  if (err) {
    console.log("******error encountered******");
    return;
  }
  console.log(`Server is up and running at port ${port}`);
});
