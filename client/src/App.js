
import React, { Component } from 'react'
import TopNav from './components/TopNav'
import Hero from './components/Hero'
// import NoArticles from './components/NoArticles'
import ArtComp from './components/ArtComp'
import Article from './components/Utils/articles.js'



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
    comments: '',
    savedArts: [],
    wapoArr: [],
    haveNew: false
  }

  handleGetArticles = event => {
    console.log('Here I am!')
    Article.getNew()
      .then(({ data }) => {
        this.setState({ wapoArr: data })
      })
  }

  handleSaveArticle = event => {
    console.log("Here I am!")
    let savedArts = this.state.savedArts
    let newArt = {
      title: 'Headline',
      summary: 'This is a short summary of my article',
      url: 'http://washingtonpost.com',
      comment: ''
    }
    Article.postOne(newArt)
    this.state.savedArts.push(newArt)
    this.setState({ ...newArt })
    console.log(newArt)
    console.log(savedArts)
  }

  render() {

    return (
      <>
        <TopNav />
        <Hero />
        {/* <NoArticles /> */}
        <ArtComp
          title={this.state.title}
          summary={this.state.summary}
          url={this.state.url}
          handleSaveArticle={this.handleSaveArticle}
        />
      </>
    )
  }
}

export default App
