
require('dotenv').config()

const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/'})
const app = express()

const path = require('path')
const publicDir = path.join(__dirname,'/public')

let indexRouter = require('./routes/indexRouter'),
    albumsRouter = require('./routes/albumsRouter')
//path routes
//const albums = path.join(__dirname,'albums')


const PORT = 4000,
      HOST = "0.0.0.0"

app.use(express.urlencoded({ extended: false }))

app.use(express.static(publicDir))

app.use(indexRouter)
app.use(albumsRouter)



app.listen(PORT, HOST, () => {
    console.log(`Listening on ${HOST}:${PORT}`)
})
 module.exports = {
    app,
    publicDir
 }