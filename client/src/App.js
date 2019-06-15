
import React, { Component } from 'react'
import TopNav from './components/TopNav'
import Hero from './components/Hero'
// import NoArticles from '../../components/NoArticles'
import Article from './components/Article'



// handleSaveArticle = event => {
//   console.log('Here I am!')
//   Article.postOne()
// }

// handleAddComment = event => {
//   console.log('Here I am!')
//   Article.putOne()
// }

// handleDeleteArticle = event => {
//   console.log('Here I am!')
//   Article.deleteOne(_id)
// }


class App extends Component {
  state = {
    title: '',
    summary: '',
    url: '',
    comments: '' 
  }

  handleGetArticles = event => {
    console.log('Here I am!')
    Article.getNew()
  }

  render() {
  
    return (
      <>
            <TopNav />
            <Hero />
            {/* <NoArticles /> */}
            {/* <Article /> */}
      </>
    )
  }
}  

export default App
