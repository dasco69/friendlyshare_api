const express = require('express')
const router = express.Router()

router.get('/', (req, res, next)=> {
    let root = ['hello']
    res.status(200).send(root)
})

module.exports = router