// Dependencies

const express = require("express");
const path = require("path");
const fs = require("fs");
const db = require("./Develop/db/db.json");

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app the handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes

app.get("/api/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/Develop/db/db.json"))
);

//Displays notes page where user can POST
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/Develop/public/notes.html"))
);

// Displays all notes

//Basic route that sends the user first to the AJAX Page
app.get("*", (req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.sendFile(path.join(__dirname, "/Develop/public/index.html"));
  } else {
    res.sendFile(path.join(__dirname, "/Develop/public", req.url));
  }
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
