const express = require('express')
const router = express.Router()
const api = require('./api/v0')
const config = require('../config')
const dayjs = require('dayjs')

//siteTitle
router.use((req, res, next) => {
  res.locals = config
  next()
})

//home
router.get('/', (req, res) => {
  res.render('pages/index', {pageTitle: "Jeep Gallery"})
})

//login
router.get('/login', (req, res) => {
  res.render('pages/login', {pageTitle: "Login", dayjs: dayjs})
})

//register
router.get('/register', (req, res) => {
  res.render('pages/register', {pageTitle: "Register", dayjs: dayjs})
})

router.use('/api/v0', api)

module.exports = router;