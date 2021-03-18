const express = require('express')
const router = express.Router()
const gallery = require('../../data/gallery')

router.get('/', (req, res) => {
  res.json(gallery)
})

module.exports = router