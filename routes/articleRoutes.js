// could use 'db' if more than the News model was required
const Article = require('../models/Article.js')


module.exports = app => {
    // POST an article to the db
    // this is working!
    app.post('/articles', (req, res) => Article.create(req.body, e => e ? console.log(e) : res.sendStatus(200)))

    // UPDATE an article in the db
    // this is working!
    app.put('/articles/:_id', (req, res) => Article.update({ _id: req.params._id }, { $set: req.body }, e => e ? console.log(e) : res.sendStatus(200)))

    // GET all articles from the db
    // this is working!
    app.get('/articles', (req, res) => Article.find((e, docs) => e ? console.log(e) : res.json(docs)))

    // DELETE an article from the db
    // this is working!
    app.delete('/articles/:_id', (req, res) => Article.remove({ _id: req.params._id }, e => e ? console.log(e) : res.sendStatus(200)))

}