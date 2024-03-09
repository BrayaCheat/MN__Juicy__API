const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const bodyParser = require("body-parser");
const route = require('./src/Route/Product__Route')

//Invoke DB
require("./src/utility/database");

//Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.static("public/uploads"));
app.use('/api', route)

app.get("/", (req, res) => {
  res.send("Hello MN Juicy");
});

app.listen(PORT, () => {
  try {
    console.log(`http://127.0.0.1:${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
