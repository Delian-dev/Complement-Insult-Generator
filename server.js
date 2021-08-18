const express = require("express");
const path = require("path");

const complements = [
  "You look nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

const insults = [
  "You look awful today",
  "That dress looks horrible on you",
  "When was the last time you worked out, fatty?",
  "You can't do anything",
  "You've abandoned this course. You're really dumb",
  "You suck at programming! How cool is that?",
  "I'm really dissapointed in you",
  "You didn't make it",
  "You've learned nothing, and that's pretty sad"
]

function getRandomComplement() {
  const randomComplement = Math.floor(Math.random() * complements.length);
  return complements[randomComplement];
}

function getRandomInsult(){
  const randomInsult = Math.floor(Math.random()* insults.length);
  return insults[randomInsult];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});

app.get("/insult", function(req, res){
  res
    .json({
      insult: getRandomInsult()
    })
    .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");




