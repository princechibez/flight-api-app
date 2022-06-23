const express = require("express");
const { json } = require("express");
// const flights = require("./controllers/flightController");
// const models = require("./models/Flight");
const routes = require("./routes/flightRoute");
const bodyParser = require('body-parser');

const app = express();

app.use(json());
app.use(bodyParser.json()); //Used for JSON requests
// app.use(bodyParser.urlencoded({ extended: false })); //Used for for form data i.e xx-www-urlencoded <form>

app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
