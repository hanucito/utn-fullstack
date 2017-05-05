const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Got a GET request"));

app.post("/", (req, res) => res.send("Got a POST request"));

app.put("/", (req, res) => res.send("Got a PUT request"));

app.patch("/user", (req, res) => res.send("Got a PUT request at /user"));

app.delete("/user", (req, res) => res.send("Got a DELETE request at /user"));

app.listen(3000, () => console.log("Example app listening on port 3000!"));
