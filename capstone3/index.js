"use strict";
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`The app is listening in port: ${port}`);
});

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));      

app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.get("/comic", (req, res) => {
    res.render("comic.ejs");
});
app.get("/manga", (req, res) => {
    res.render("manga.ejs");
});
app.get("/videogame", (req, res) => {
    res.render("videogame.ejs");
});