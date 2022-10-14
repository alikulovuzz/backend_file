require('./db/database')
const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const http = require('http');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger_output.json');
// const multer = require('multer');
// const img=require('./db/models/img')

// routers
const file = require('./router/file_help');

// utils
const PORT = process.env.PORT || 0;
dotenv.config();
const app = express();
const HOST =  '127.0.0.1';
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(__dirname + '/uploads'));


app.use('/image', file);
app.use('/welcome', (req, res) => {
    res.json({ name: "Hello" })
})

app.listen(HOST, PORT, (err) => {
  if (err) { console.log(`Error:${err}`) }
  console.log(`Running on port ${PORT}`);
});

module.exports=app
