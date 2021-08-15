const fs = require('fs')

/**
 * @class 
 * @function createFolder
 * @function readFiles
 * @function createAlbums
 * @function readAlbums
 * @function folderExist
 */
class Folder {
    constructor() {}
    /**
     * create folder source
     * @function createFolder
     * @param {*} path @type {string}
     */
    createFolder(path) {
        fs.mkdir(path, (err)=> {
            if(err) return console.error(err)
            else console.log('create')
        })
    }
    /**
     * read file on folder
     * @function readFiles
     * @param {*} path @type {string}
     */
    readFiles(path) {
      let folder = []
      const files = fs.readdirSync(path)

        for(const file of files) {
          folder.push(file)
        }
         return folder
    }
    /**
     * @function createAlbums
     * @param {*} path @type {string}
     * @param {*} title @type {string}
     */
    createAbums(path , title) {
      fs.mkdirSync((`${path}/${title}`), (err)=> {
        if(err) return console.error(err)
        else console.log(`Create new album: ${title}`)
        //if title exist on /albums or else not create this
      })
    }
    /**
     * @function readAlbums
     * @param {*} path @type {string}
     * @param {*} title @type {string}
     */
    readAlbums(path, title) {
      fs.readdirSync(`${path}/${title}`, (err)=> {
        if(err) return console.error(err)
        else console.log(`We are on ${title}`)
      })
    }
    /**
     * checked if folder exist with asyncrhone
     * @function folderExist
     * @param {*} path @type {string}
     */
    folderExist(path) {
      try {
        fs.existsSync(path)
      } catch (error) {
        if(!path) console.err("Cette albums n'existe pas")
      }
      
    }
}

module.exports = Folder