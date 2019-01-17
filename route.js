const express = require('express')
const path = require('path')
const router = express.Router()
const fs = require ('fs')
// tell express how it should process the body of HTTP requests
router.use(express.static('public'))
router.use(express.urlencoded({extended: false}))

// router.get('/', (req, res) =>{
//    res.redirect('/puppies/styles')
// })

// router.get('/styles', (req, res) =>{
//    const filepath = path.join(__dirname, './data1950a.json')
//    fs. readFile(filepath, (err, contents) =>{
//       if (err) res.status(500).send('file access error')
//       const contentsObj = JSON.parse(contents)
//       res.render('index', contentsObj)
//       console.log(contentsObj)
//    })
//   })

router.get('/', (req, res) => {
   const filepath = path.join(__dirname, './data1950a.json')
   fs. readFile(filepath, (err, contents) =>{
      if (err) res.status(500).send('file access error')
      const contentsObj = JSON.parse(contents)
      res.render('index', contentsObj)
      console.log(contentsObj)
   })
  })

module.exports = router