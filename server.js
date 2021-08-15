
require('dotenv').config()

const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/'})
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const path = require('path')
const publicDir = path.join(__dirname,'/public')

const indexRouter = require('./routes/indexRouter')
const albumsRouter = require('./routes/albumsRouter')
//path routes
//const albums = path.join(__dirname,'albums')


const PORT = 4000,
      HOST = "0.0.0.0"

app.use(cors())

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/public", express.static(publicDir))

app.use(indexRouter)
app.use(albumsRouter)



app.listen(PORT, HOST, () => {
    console.log(`Listening on ${HOST}:${PORT}`)
})
 module.exports = {
    app,
    publicDir
 }