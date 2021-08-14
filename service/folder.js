const fs = require('fs')

class Folder {
    constructor() {}

    createFolder(path) {
        fs.mkdir(path, (err)=> {
            if(err) return console.error(err)
            else console.log('create')
        })
    }
    readFiles(path) {
        fs.readdir(
            path,
            (err, files) => {
              if (err) return console.error(err)
              
              for (let file of files) {
                console.log(file)
              }
            }
          )
    }
    //Todo à finir
    // createAbums(path , title) {
    //   fs.mkdir((path+title), (err)=> {
    //     if(err) return console.error(err)
    //     else console.log(`Create new album: ${title}`)
    //   })
    // }
}

module.exports = Folder