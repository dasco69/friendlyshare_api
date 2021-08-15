/**
 * @requires Packages
 */
const express = require('express')
const router = express.Router()
//Init path route
const path = require('path')
const albums = path.join(__dirname,'../public/albums')

const multer = require('multer')
/**
 * @package for create or read Folder and Files
 */
const Folder = require('../service/folder')
const folder = new Folder
const DownloadFile = require('../service/files')
const files = new DownloadFile
/**
 * @package
 */
//Service stockage Multer config
let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let type = req.params.type
        let path = `./public/albums/${type}`
        folder.folderExist(`${path}/${type}`)
        callback(null, path)
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})
let upload = multer({ storage : storage })


router.get('/albums', async ( req, res)=> {
    try {
    //Create folder 

        //await folder.createFolder(albums)
        //const test = await folder.readFiles(albums)
        const checkAlbums = await folder.readFiles(albums)
        res.status(200).send(checkAlbums)
    } catch (error) {
        res.status(500).send('error server')
    }
 })
router.get('/albums/:type', async (req, res)=> {
    try {
        const allFiles = await files.readFiles(req, res)
        res.send(allFiles)
        res.status(200)
    } catch (error) {
        console.error(error)
        res.status(500).send('erro server')
    }
})
 router.post('/albums/create-albums' ,(req, res)=> {
     try {
        const title = req.body.title
        folder.createAbums(albums, title)
                
        res.status(200)
        
     } catch (error) {
         res.status(500).send('error server')
     }
 })

/**
 * Post multiple image
 * Max 30 pictures by request
 */
router.post('/albums/uploads-files/:type', upload.array('pictures', 30), async (req, res)=> {
    try {
        await files.uploadFiles(req, res)
    } catch (error) {
        console.log(error)
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