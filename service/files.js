const fs = require('fs')
const path = require('path')
const albums = path.join(__dirname,'../public/albums')

class DownloadFile {
    constructor() {}
    /**
     * upload only one file
     * @function uploadFile
     * @param {*} req @type {object}
     * @param {*} res @type {object}
     */
    uploadFile(req, res) {
        const nameOfAlbum = req.params.type
        const filesUpload = req.files
        console.log(nameOfAlbum, filesUpload)
        res.json({ message: "Succefuly uploaded this file"})
    }
    /**
     * upload multiple files
     * @function uploadFiles
     * @param {*} req @type {object}
     * @param {*} res @type {object}
     */
    uploadFiles(req, res) {
        const nameOfAlbum = req.params.type
        const filesUpload = req.files
        console.log(nameOfAlbum, filesUpload)
        res.json({ message: "Succefuly uploaded all files"})
    }
    /**
     * @function readFiles
     * @param {*} req 
     * @param {*} res 
     */
    readFiles(req, res) {
        let allFiles = []
        const nameOfAlbum = req.params.type
        const files = fs.readdirSync(`${albums}/${nameOfAlbum}`)
        
        for(const file of files) {
            allFiles.push(file)
          }
        return allFiles
    }

}

module.exports = DownloadFile