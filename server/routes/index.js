var express = require('express');
var router = express.Router();

const going=[]
const notgoing=[]
let id = 0;

router.post('/going', (req, res, next) => {
  id++
  going.push({
    id:id,
    user: req.body
  })
  console.log(going)
  res.json({
    message: "User Added"
  })
})

router.post('/notgoing', (req, res, next) => {
  id++
  notgoing.push({
    id:id,
    user: req.body
  })
  console.log(notgoing)
  res.json({
    message: "User Added"
  })
})

router.get('/going', (req, res, next) => {
  res.json({
    going: going
  })
})

router.get('/notgoing', (req, res, next) => {
  res.json({
    notgoing: notgoing
  })
})

module.exports = router;
