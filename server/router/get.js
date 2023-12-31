var express = require('express')
var router = express.Router()

router.get("/current", (req, res) => {
  const timestamp = new Date().getTime() + 9 * 60 * 60 * 1000
  const date = new Date(timestamp)

  const timeData = {
    timestamp: timestamp,
    year: date.getFullYear().toString().slice(-2),
    month: ("0" + (date.getMonth() + 1)).slice(-2),
    day: ("0" + date.getDate()).slice(-2),
    hour: ("0" + date.getHours()).slice(-2),
    minute: ("0" + date.getMinutes()).slice(-2),
    second: ("0" + date.getSeconds()).slice(-2)
  }

  res.status(200).send({ success: true, time: timeData })

})

router.get("/alarm/modal", (req, res) => {

  const clientDate = new Date()
  clientDate.getTime(Number(req.query.data))

  const reqTime = {
    hours: ("0" + clientDate.getHours()).slice(-2),
    minute: ("0" + clientDate.getMinutes()).slice(-2),
  }

  const serverDate = new Date();
  serverDate.getTime() + 9 * 60 * 60 * 1000

  const resTime = {
    timestamp: serverDate.getTime() + 9 * 60 * 60 * 1000,
    hours: ("0" + serverDate.getHours()).slice(-2),
    minute: ("0" + serverDate.getMinutes()).slice(-2),
  }


  if (resTime.hours === reqTime.hours && resTime.minute === reqTime.minute) {
    res.status(200).send({ success: true, alarm: resTime })
  } else {
    res.status(400).send({ success: false })
  }
})


module.exports = router