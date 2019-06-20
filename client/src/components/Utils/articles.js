import Axios from 'axios'


const Article = {
    // GET articles from Washington Post
    // this does bring back the home page of the washington post
    // but it doesn't execute the scraping code
    getNew: _ => {
        console.log('so far so good')
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://washingtonpost.com'
        return fetch(proxyUrl + targetUrl)
            .then(res => res.text())
            .then(({ data }) => {
                const $ = require('cheerio').load({data})
                const wapoArr = []
                $('div.no-skin').each((i, elem) => {
                    wapoArr.push({
                        title: $(elem).children('.headline').text(),
                        summary: $(elem).children('.blurb').text(),
                        url: $(elem).children('.headline').children('a').attr('href'),
                    })
                })
            console.log(wapoArr)
            })
            .catch(e => console.log(e))
    },

    // GET all saved articles from the db
    // this is working!
    getAll: _ => Axios.get('/articles'),

    // SAVE one article to the db
    postOne: Article => Axios.post(`/articles`, Article),

    // Add a comment to a saved article
    putOne: (_id, Article) => Axios.put(`/articles/${_id}`, Article),

    // DELETE a saved article from the db
    // this is working!
    
    deleteOne: _id => Axios.delete(`/articles/${_id}`)
}

export default Article