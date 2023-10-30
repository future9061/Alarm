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

  //딜레이 20s

  const date = new Date(Number(req.query.data))
  const reqTime = {
    hours: date.getHours(),
    minutes: date.getMinutes()
  }


  console.log("통신 했다", reqTime.hours, reqTime.minutes)

  res.status(200).send({ success: true })

})




module.exports = router