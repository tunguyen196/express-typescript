const express = require('express')
const app = express()
const conn = require('./config/db.js')
const port = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port)    

app.get('/home', function(req, res) {
    var sql = "SELECT * FROM tasks";
  conn.query(sql, function(err, results) {
    if (err) throw err;
    res.send(results);
  });
}) 