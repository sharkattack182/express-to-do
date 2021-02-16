var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 5500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "to_do_db"
  });


  
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });
  

  app.get("/", function(req,res) {
      connection.query("SELECT * FROM to_dos;", function(err, response) {
          if(err) throw err;
          res.render("index", {to_dos: response});
      })
  });

  app.post("/", function(req,res) {
    connection.query("INSERT INTO to_dos SET ?", {
        note_name: req.body.note_name, 
        note_content: req.body.note_content
    }, 
    function(err, response) {
        if(err) throw err;
        res.redirect("/");
    })
});


  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });