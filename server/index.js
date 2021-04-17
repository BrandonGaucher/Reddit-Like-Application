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

//routes for login and register

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
          correct: true,
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
        if (results.length > 0) {
          const comparePass = await bcrypt.compare(
            password,
            results[0].password
          );

          if (comparePass) {
            res.send({
              code: 200,
              success: "user logged in successfully",
              correct: true,
            });
          } else {
            res.send({
              code: 204,
              error: "There is a problem with password authentication",
              correct: false,
            });
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
});

app.post("/createpost", async (req, res) => {
  const title = req.body.title;
  const text = req.body.text;

  var postUsername = req.body.user;
  var category = req.body.category;

  pool.query(
    "INSERT INTO posts (title, description, category, username, post_date) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP()) ",
    [title, text, category, postUsername],
    async function (error, res, fields) {
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

//admin routes

//get all users
app.get("/userlist", async (req, res, next) => {
  pool.query("SELECT * FROM users", async function (err, data, fields) {
    if (err) throw err;
    res.send({ userData: data });
  });
});

// get all posts
app.get("/postlist", async (req, res, next) => {
  pool.query("SELECT * FROM posts ORDER BY post_date DESC", async function (err, data, fields) {
    if (err) throw err;
    res.send({ postData: data });
  });
});
// get all comments
app.get("/commentlist", async (req, res, next) => {
  pool.query("SELECT * FROM comments", async function (err, data, fields) {
    if (err) throw err;
    res.send({ commentData: data });
  });
});

//get category of posts
app.post("/categorydata", async (req, res, next) => {
  const category = req.body.category;
  pool.query(
    "SELECT * FROM posts WHERE category LIKE ?",
    [category],
    async function (err, data, fields) {
      if (err) throw err;
      res.send({ postData: data });
    }
  );
});
//search for post
app.post("/search", async (req, res, next) => {
  const title = req.body.title;
  pool.query(
    "SELECT * FROM posts WHERE title LIKE ?",
    [title],
    async function (err, data, fields) {
      if (err) throw err;
      res.send({ postData: data });
    }
  );
});
//remove post
app.post("/removePost", (req, res) => {
  const post = req.body.postToRemove;
  var sql = "DELETE FROM posts WHERE id = '" + post + "'";
  pool.query(sql, function (err, data) {
    if (err) throw err;
    res.send({ postData: data });
  });
});

//disable users

app.post("/disableUser", (req, res) => {
  const user = req.body.userToDisable;
  var sql =
    "UPDATE users SET permissions = 'disabled' WHERE username = '" + user + "'";
  pool.query(sql, function (err, data) {
    if (err) throw err;
    res.send({ userData: data });
  });
});

//enable users
app.post("/enableUser", (req, res) => {
  const user = req.body.userToEnable;
  var sql =
    "UPDATE users SET permissions = 'enabled' WHERE username = '" + user + "'";
  pool.query(sql, function (err, data) {
    if (err) throw err;
    res.send({ userData: data });
  });
});

app.post("/profile", (req, res) => {
  const user = req.body.username;

  pool.query(
    "SELECT email FROM users WHERE username LIKE ? ",
    [user],
    function (error, data) {
      if (error) {
        res.send({
          code: 400,
          failed: "error occurred",
          error: error,
        });
      } else {
        res.send({
          emailData: data[0].email,
          code: 200,
          success: "received email value",
        });
      }
    }
  );
});

//creaete a comment

app.post("/comment", (req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const post_id = req.body.postId;

  pool.query(
    "INSERT INTO comments (description, post_date, username, postId) VALUES (?, CURRENT_TIMESTAMP(), ?, ?) ",
    [description, username, post_id],
    function (error, data) {
      if (error) {
        res.send({
          code: 400,
          failed: "error occurred",
          error: error,
        });
      } else {
        res.send({
          code: 200,
          success: "comment posted!",
        });
      }
    }
  );
});

app.post("/updateUsername", (req, res) => {
  const NewUsername = req.body.NewUsername;
  const OldUsername = req.body.OldUsername;

  pool.query(
    "UPDATE users SET username = ? WHERE username = ?",
    [NewUsername, OldUsername],
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
          success: "username updated sucessfully",
          correct: true,
        });
      }
    }
  );
});

app.post("/updateEmail", (req, res) => {
  const NewEmail = req.body.NewEmail;
  const username = req.body.username;

  pool.query(
    "UPDATE users SET email = ? WHERE username = ?",
    [NewEmail, username],
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
          success: "email updated sucessfully",
          correct: true,
        });
      }
    }
  );
});

const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}


app.post("/updatePassword", (req, res) => {
  const NewPassword = req.body.NewPassword;
  const username = req.body.username;
  const NewEncryptedPassword = hashPassword(NewPassword);

  pool.query(
    "UPDATE users SET password = ? WHERE username LIKE ?",
    [NewEncryptedPassword, username],
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
          success: "password updated sucessfully",
          correct: true,
        });
      }
    }
  );
});