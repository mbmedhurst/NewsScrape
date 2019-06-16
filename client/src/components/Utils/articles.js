import Axios from 'axios'


const Article = {
    // GET articles from Washington Post
    getNew: _ => {
        return Axios.get('https://washingtonpost.com')
        console.log('here i am')
            .then(r => {
                const $ = require('cheerio').load(r)
                const wapoArr = []
                $('div.no-skin').each((i, elem) => {
                    wapoArr.push({
                        title: $(elem).children('.headline').text(),
                        summary: $(elem).children('.blurb').text(),
                        url: $(elem).children('.headline').children('a').attr('href'),
                    })
                })
            })
            .catch(e => console.log(e))
    },


    // GET all saved articles from the db
    getAll: _ => Axios.get('/articles'),

    // SAVE one article to the db
    postOne: Article => Axios.post(`/articles`, Article),

    // Add a comment to a saved article
    putOne: (_id, Article) => Axios.put(`/articles/${_id}`, Article),

    // DELETE a saved article from the db
    deleteOne: _id => Axios.delete(`/articles/${_id}`),
}

export default Article