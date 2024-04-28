const express = require('express');
// const session = require('express-session');
// const flash = require('express-flash');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
require('dotenv').config();
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require('./routes/app');

const PORT = 8080;

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server Started on PORT : ${PORT}`);
});

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log('Connected to the Database'))
    .catch(err => console.log(err))


