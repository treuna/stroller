const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const strollerRouter = require('./routes/stroller-router')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())

db.once('open', () => console.log('connected to the database'))
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', strollerRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))