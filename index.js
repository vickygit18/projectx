var mysql = require("mysql");
 require('dotenv').config();
var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
});

connection.connect((err) => {
    if (err) {
      console.log("Error occurred", err);
    } else {
      console.log("Connected to database");
    //   var sql = "INSERT INTO students (id, name, course) VALUES (1, 'John Doe', 'Computer Science')";
      connection.query(sql, function (err, result) {
        if (err) {
          console.log(err);
        }
        // console.log("Value inserted");
      });
    }
});

var sql = "SELECT * FROM students";
connection.query(sql, function (err, result) {
  console.log(result);
});
