import axios from 'axios'

const Article = {
    // GET articles from Washington Post
    getNew = _ => {
        axios.get('https://washingtonpost.com')
            .then(({ data }) => {
                const $ = require('cheerio').load(data)
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
    getAll: _ => axios.get('/articles'),

    // SAVE one article to the db
    postOne: Article => axios.post(`/articles`, Article),

    // Add a comment to a saved article
    putOne: (_id, Article) => axios.put(`/articles/${_id}`, Article),

    // DELETE a saved article from the db
    deleteOne: _id => axios.delete(`/articles/${_id}`),
}

export default Article