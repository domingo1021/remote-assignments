const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

app.use(express.static("./static"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("dotenv").config();
const password = process.env["DB_PASSWORD"];

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: password,
    database: "assignment",
});

//connect
db.connect((error) => {
    if (error) {
        throw error;
    }
    console.log("MySQL connected..");
});

app.get("/", (req, res) => {
    res.send("<h1>Hello world!<h1>");
});

app.get("/create-table", (req, res) => {
    let sql = `CREATE TABLE users
    (id INT unsigned NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id));`;
    let query = db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).send("Table created");
    });
});

app.get("/show-all", (req, res) => {
    let sql = "SELECT * FROM users";
    let query = db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.status(200).send(result);
    });
});

// async function checkEmail(email) {
//      失敗，會回傳undefined.
//     let sql = `SELECT email FROM users WHERE email = '${email}';`;
//     let query = db.query(sql, async (err, results) => {
//         if (err) {
//             throw err;
//         }
//         return await results;
//     });
// }

app.post("/sign-in", (req, res) => {
    let { email, password } = req.body;
    let sql_1 = `SELECT DISTINCT email, password FROM users WHERE email = '${email}';`;
    let query = db.query(sql_1, (err, results) => {
        if (err) {
            throw err;
        }
        if (results[0]) {
            if (
                email === results[0].email &&
                password === results[0].password
            ) {
                res.status(200).json({ success: true });
            } else if (password !== results[0].password) {
                res.status(400).json({
                    success: false,
                    msg: "密碼不相符",
                });
            }
        } else {
            res.status(400).json({ success: false, msg: "該信箱尚未註冊" });
        }
    });
});

app.post("/sign-up", (req, res) => {
    let { email, password } = req.body;
    let sql = `SELECT email FROM users WHERE email = '${email}';`;
    let query = db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        if (results.length === 0) {
            let sql = `INSERT INTO users (email, password) VALUES ('${email}', '${password}');`;
            let query = db.query(sql, (err, result) => {
                if (err) {
                    throw err;
                }
                return res.status(200).json({ success: true });
            });
        } else {
            return res.status(400).json({
                success: false,
                msg: "該信箱已註冊",
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Connecting to port ${port}`);
});
