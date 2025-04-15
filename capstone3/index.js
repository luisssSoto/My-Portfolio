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

let postsArray = [];
postsArray[0] = {
    section: 'Videogame',
    postTitle: 'Brothers in Arms',
    postDescription: 'A great war RPG you will enjoy...'
};
postsArray[1] = {
    section: 'Comics',
    postTitle: 'Spiderman',
    postDescription: 'Peter Parker is a young man who was bite for a spider now he is strong...'
};

app.get("/", (req, res) => {
    res.render('index.ejs', {
        posts: postsArray
    });
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
app.get("/form", (req, res) => {
    res.render("form.ejs");
});
app.post("/submit", (req, res) => {
    const newPost = req.body;
    postsArray.push(newPost);
    res.redirect("/");
});
app.post("/edit", (req, res) => {
    console.log(`Request body: ${req.body}`);
});
app.get("/edit", (req, res) => {
    const postTitle = req.query.title;
    const postToEdit = postsArray.find(post => post.postTitle === postTitle);
    res.render("edit.ejs", {
        post: postToEdit
    });
});

// next step: figure out how to save the changes once were modified and show the modified post