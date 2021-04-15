const cors = require("cors");
const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

const app = express();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.use(express.json());
app.use(cors());

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(
    `App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`
  );
});

//routes for login

app.post("/register", async (req, res) => {
  const password = req.body.password;
  const encryptedPassword = await bcrypt.hash(password, saltRounds);

  let users = {
    username: req.body.username,
    email: req.body.email,
    password: encryptedPassword,
  };

  pool.query(
    "INSERT INTO users SET ?",
    users,
    function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: "error occurred",
          error: error,
        });
      } else {
        res.send({
          code: 200,
          success: "user registered sucessfully",
        });
      }
    }
  );
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password; 


//check whether user credentials are correct
  pool.query(
    "SELECT username, password FROM users WHERE username LIKE ?",
    [username],
    async function (err, results, fields) {
      if (err) {
        res.send({
          code: 400,
          failed: "error occurred",
          error: err,
          correct: false,
        });
      } else {
        if(results.length > 0){
          const comparePass = await bcrypt.compare(password, results[0].password)

          if(comparePass){
            res.send({
           code: 200,
           success: "user logged in successfully",
           correct: true,
            })
          }else{
            res.send({
               code: 204,
              error: "There is a problem with password authentication",
              correct: false,
            })
          }
        } else {
          res.send({
            code: 206,
            error: "Email does not exist",
            correct: false,
          });
        }


         
      }
    }
  );
}
);

app.post("/createpost", async (req, res) => {
  const title = req.body.title;
  const text = req.body.text;
  var postUsername = "benfitz";


  pool.query(
    "INSERT INTO posts (title, description, username, post_date) VALUES (?, ?, ?, CURRENT_TIMESTAMP()) ",
    [title,text, postUsername],
    function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: "error occurred",
          error: error,
        });
      } else {
        res.send({
          code: 200,
          success: "post registered sucessfully",
        });
      }
    }
  );
});