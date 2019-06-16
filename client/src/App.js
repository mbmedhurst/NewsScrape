
import React, { Component } from 'react'
import TopNav from './components/TopNav'
import Hero from './components/Hero'
// import NoArticles from './components/NoArticles'
import ArtComp from './components/ArtComp'
import Article from './components/Utils/articles.js'
// import Axios from 'axios';




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

  componentDidMount() {
    Article.getNew()
      .then(r => {
        this.setState({ wapoArr: r})
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

  // handleAddComment = event => {
  //   console.log('Here I am!')
  //   Article.putOne(_id, Article)
  //   this.setState({...newArt._id})
  //   console.log(newArt._id)
  // }

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
          componentDidMount={this.componentDidMount}
          handleSaveArticle={this.handleSaveArticle}
        />
      </>
    )
  }
}

export default App
