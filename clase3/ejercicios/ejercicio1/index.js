const express = require("express");
const app = express();
const routeCategories = require("./routes/categories");
const routeBooks = require("./routes/books");
const bodyParser = require("body-parser");

// Lo vemos en la próxima clase
app.use(bodyParser.json());

app.get("/categories", routeCategories.list);
app.post("/categories", routeCategories.create);
app.get("/categories/:id", routeCategories.get);

app.get("/books", routeBooks.list);
app.post("/books", routeBooks.create);
app.get("/books/:id", routeBooks.get);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
