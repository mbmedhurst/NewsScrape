import React, { Component } from 'react'
import Hero from '../../components/Home/Hero'
import NoArticles from '../../components/Home/NoArticles'
import ArtComp from '../../components/Home/ArtComp'
import Article from '../../components/Utils/articles.js'
// import Axios from 'axios';

class Home extends Component {
  state = {
    title: '',
    summary: '',
    url: '',
    comments: '',
    savedArts: [],
    wapoArr: [],
    haveNew: false
  }

  // this is working!
  handleSaveArticle = event => {
    console.log("Here I am!")
    let savedArts = this.state.savedArts
    let newArt = {
      title: this.state.title,
      summary: this.state.summary,
      url: this.state.url,
      comment: this.state.comment
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
        <Hero />
        <NoArticles />
        <ArtComp
          wapoArr={this.state.wapoArr}
          title={this.state.title}
          summary={this.state.summary}
          url={this.state.url}
          handleGetArticles={this.handleGetArticles}
          handleSaveArticle={this.handleSaveArticle}
        />
      </>
    )
  }
}

export default Home
