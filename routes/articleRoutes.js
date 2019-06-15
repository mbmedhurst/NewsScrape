// could use 'db' if more than the News model was required
const { Article } = require('../models/Article.js')

module.exports = app => {
    // POST an article to the db
    app.post('/articles', (req, res) => Article.insert(req.body, e => e ? console.log(e) : res.sendStatus(200)))

    // ADD a comment to an article
    app.put('/articles/:_id', (req, res) => Article.update({ _id: req.params._id }, { $set: req.body }, e => e ? console.log(e) : res.sendStatus(200)))

    // GET all saved articles from the db
    app.get('/articles', (req, res) => Article.find((e, docs) => e ? console.log(e) : res.json(docs)))

    // DELETE an article
    app.delete('/articles/:_id', (req, res) => Article.remove({ _id: req.params._id }, e => e ? console.log(e) : res.sendStatus(200)))

}