var express = require('express')
var router = express.Router()

router.post('/time', (req, res) => {
  console.log(req.body.timeData)
  res.send({ success: true, data: '성공' })
})

module.exports = router
