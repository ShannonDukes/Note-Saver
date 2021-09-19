const express = require("express");
const path = require("path");

const app = express();
let PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
  console.log("http://localhost:" + PORT);
});