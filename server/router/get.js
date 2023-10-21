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

  res.send({ success: true, time: timeData })
})


module.exports = router