// server.js
// where your node app starts

// init project
var express = require('express');
var path = require("path");
var fileUpload = require('express-fileupload');

var app = express();

app.use(express.static('public'));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(fileUpload());

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/get-size", function (req, res) {
 if(!req.files.file) {
   res.status(400).send('No file uploaded.');
 }
 else {
   var obj = {size_bytes: Buffer.byteLength(req.files.file.data)};
   res.json(obj);
 }
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
