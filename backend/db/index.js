const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose
  .connect(process.env.DB_ROUTE, { useNewUrlParser: true})
  .catch(e => {
    console.error('Connection erro', e.message)
  })

  const db = mongoose.connection

  module.exports = db
