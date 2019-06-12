// could use 'db' if more than the News model was required
const { Article } = require('../models')

module.exports = apps =>  {
    // article routes here
    app.get('/articles', (req, res) => Article.find((e, article) => e ? console.log(e) : res.json(article)))
}