const express = require('express')
const app = express()
const port = 5000
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "../client/build")))

app.use('/api/time', require("./router/get.js"))

app.get("/", ((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
}))

app.get("*", ((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
}))


app.listen(port, () => {
  console.log(`서버 시작 ${port}`)
})

