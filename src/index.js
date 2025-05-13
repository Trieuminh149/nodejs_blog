const express = require('express')
const http = require('http')
const path = require('path')
const morgan = require('morgan')
const handlebars = require("express-handlebars")
const { Server } = require("socket.io")

const app = express()
const port = 3000
const db = require('./config/db')

app.use(express.static(path.join(__dirname, 'public')))

//connect db
db.connect();

// Template engine
app.engine('handlebars', handlebars.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'resources', 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'resources', 'views', 'partials')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));


const route = require('./routes')
route(app);
// Khởi chạy web server
const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



