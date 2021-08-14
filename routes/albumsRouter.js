const express = require('express')
const router = express.Router()

const path = require('path')
const albums = path.join(__dirname,'../public/albums')

const multer = require('multer')
//const albums = '../public/albums'

const Folder = require('../service/folder')

//gestion du stockage avec multer
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
let upload = multer({ storage : storage })


router.get('/albums', ( req, res)=> {
    try {
    //Create folder 
     const folder = new Folder

     folder.createFolder(albums)
     folder.readFiles(albums)

     res.status(200).send('albums')
    } catch (error) {
        res.status(500).send('error server')
    }
 })
 //Todo a finir

//  router.post('albume/create-albums', title ,(req, res)=> {
//      try {
//          const foler = new Folder

//          folder.createAbums(albums+)
//      } catch (error) {
//          res.status(500).send('error server')
//      }
//  })
 
router.post('/albums/uploads-files', upload.array('profile',2), (req, res)=> {
     try {
         res.send(req.files)
         //res.json({ message : ' Succefuly uploaded files'})
     } catch (error) {
         res.status(500).send('error server')
     }
 })

router.put('/albums', (req, res)=> {
    try {
        
    } catch (error) {
        res.status(500).send('error server')
    }
})
router.delete('/albums', (req, res)=> {
    try {
        
    } catch (error) {
        res.status(500).send('error server')
    }
})

module.exports = router