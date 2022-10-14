const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// routers
const file = require('./router/file_help');

// utils
const PORT = process.env.PORT || 8080;
dotenv.config();
const app = express();
app.use(morgan("dev"));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use('/', (req, res) => {
  res.json({ name: "Hello" })
})
app.use('/file', file);

app.listen(PORT, (err) => {
  if (err) { console.log(`Error:${err}`) }
  console.log(`Running on port ${PORT}`);
});

module.exports=app
