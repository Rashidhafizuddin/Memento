const express = require ("express");
const bodyParser =require ("body-parser");
const ejs = require ("ejs");

const app = express();

app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
  extended:true
}));

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/ucapan", function(req, res) {
  res.render("ucapan");
});

app.get("/videos", function(req, res) {
  res.render("videos");
});

app.get("/rsvp", function(req, res) {
  res.render("rsvp");
});
app.listen(process.env.PORT || 3000,function(){
  console.log("server startes on port 3000");
})
