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
app.post("/submit", (req, res) => {
    const posts = pushPosts(req, res);
    let section = posts[0].section;
    let postTitle = posts[0].postTitle;
    let postDescription = posts[0].postDescription;
    res.render('index.ejs', {
        category: section,
        title: postTitle,
        description: postDescription
    });
});

let postsArray = [];
function pushPosts(req, res) {
    console.log(req.body);
    postsArray.push(req.body);
    return postsArray;
};