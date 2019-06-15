const mongoose = require('mongoose')

// define database document here
const Article = new mongoose.Schema({
    title: String,
    summary: String,
    url: String,
    comment: String
})

// name the model (News) and pass the schema I created (Article)
module.exports = mongoose.model('Article', Article)