const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { PORT } = process.env
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use((req, res) => {
  return res.end('Hello World [GCP-gRun]')
})

app.listen(PORT, () => console.log('App running on %s port', PORT))
