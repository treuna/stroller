const mongoose = require('mongoose')

const dbRoute =
  'mongodb+srv://trolly:Trollyl0l@cluster0-htsig.mongodb.net/test?retryWrites=true&w=majority'

mongoose
  .connect(dbRoute, { useNewUrlParser: true})
  .catch(e => {
    console.error('Connection erro', e.message)
  })

  const db = mongoose.connection

  module.exports = db