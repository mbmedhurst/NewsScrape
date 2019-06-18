import Axios from 'axios'


const Article = {
    // GET articles from Washington Post
    getNew: _ => {
        console.log('so far so good')
        return fetch('https://washingtonpost.com')
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        //     .then(data => {
        //         console.log('here is some data: ', data)
        //         return data
        //     })
        //     .then(({ data }) => {
        //         const $ = require('cheerio').load(data)
        //         const wapoArr = []
        //         $('div.no-skin').each((i, elem) => {
        //             wapoArr.push({
        //                 title: $(elem).children('.headline').text(),
        //                 summary: $(elem).children('.blurb').text(),
        //                 url: $(elem).children('.headline').children('a').attr('href'),
        //             })
        //         })
        //         return wapoArr
        //     })
        //     .catch(e => console.log(e))
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