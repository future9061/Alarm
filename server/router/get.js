var express = require('express')
var router = express.Router()

router.get("/time", (req, res) => {
  const timestamp = new Date().getTime()
  const date = new Date(timestamp)

  const timeData = {
    timestamp: timestamp,
    year: date.getFullYear().toString(),
    month: (date.getMonth() + 1).toString(),
    day: date.getDate().toString(),
    hour: date.getHours().toString(),
    minute: date.getMinutes().toString(),
    second: date.getSeconds().toString()
  }

  res.status(200).send({ success: true, time: timeData })
})

router.get("/alarm", (req, res) => {
  const client = String(req.query.data).slice(0, -5) + "00000"
  const server = String(new Date().getTime()).slice(0, -5) + "00000"

  if (client === server) {
    res.status(200).send({ success: true, alarm: server })
  }

})

module.exports = router