const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
app.use(express.static("./static"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello, my server.");
});

app.get("/data", (req, res) => {
  let { number } = req.query;
  if (!number) {
    return res.status(400).send("Lack of Parameter.");
  } else if (isNaN(Number(number))) {
    return res.status(400).send("Wrong Parameter.");
  } else {
    let sum = Number(number);
    if (sum < 0) {
      return res.status(400).send("No Negative Parameter.");
    }
    for (let i = 1; i < Number(number); i++) {
      sum += i;
    }
    return res.status(200).send(sum.toString());
  }
});

app.get("/myName", (req, res) => {
  if (req.cookies.name) {
    return res.status(201).send(`Hello ${req.cookies.name}`);
  } else {
    res.sendFile(path.join(__dirname, "./static", "login.html"));
  }
});

app.get("/trackName", (req, res) => {
  let { name } = req.query;
  res.status(201).cookie("name", name).send("success");
});

app.listen(port, () => {
  console.log(`Listening port ${port}`);
});
