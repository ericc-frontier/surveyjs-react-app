const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "surveyjs-demo",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database!");
});

module.export = db;
