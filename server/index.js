const cors = require('cors');
const express = require('express');
const mysql = require('mysql');

const app = express();



const pool = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.use(express.json());
app.use(cors());

// const db = mysql.createConnection({
//     host: process.env.MYSQL_HOST_IP,
//    user: process.env.MYSQL_USER,
//    password: process.env.MYSQL_PASSWORD,
//    database: process.env.MYSQL_DATABASE,
// });


app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(`App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`);
});


app.post('/register', (req, res) => {
  const username =  req.body.username;
  const password =  req.body.password;

  pool.query("INSERT INTO users (username, password) VALUES (?,?)", 
  [username, password], 
  (err,results)=>{
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});