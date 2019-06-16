require('dotenv').config()
const express = require('express')
const { join } = require('path')
const cors = require('cors')
const app = express()


app.use(express.static(join(__dirname, 'client')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

require('./routes')(app)

// const Article = require('./models/Article.js')

// Article.find({}, (e, docs) => {
//   console.log(docs)
// })

// works only for localhost
require('mongoose').connect('mongodb://localhost/news_db', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
  .then(_ => app.listen(3001))
  .catch(e => console.log(e))

  // when deployed to heroku
  // var MONGODB_URI = process.env.MONGODB_URI || "mongodb://loclahost/news_db"
  // mongoose.connect(MONGODB_URI)