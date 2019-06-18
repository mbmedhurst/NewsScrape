
import React, { Component } from 'react'
import Hero2 from '../../components/Saved/Hero2'
// import NoArticles from './components/NoArticles'
import ArtComp2 from '../../components/Saved/ArtComp2'
import Article from '../../components/Utils/articles.js'
// import Axios from 'axios';

class Saved extends Component {
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
  componentDidMount() {
    // console.log('hello marianna')
    let savedArts = []
    Article.getAll()
      .then(({ data }) => {
        savedArts.push(data)
        this.setState({ savedArts: data })
        // console.log(savedArts)
      })
  }


  // handleAddComment = event => {
  //   console.log('Here I am!')
  //   Article.putOne(_id, Article)
  //   this.setState({...newArt._id})
  //   console.log(newArt._id)
  // }

  // handleDeleteArticle = event => {
  //   console.log('Here I am!')
  //   Article.deleteOne(_id)
  // }

  render() {

    return (
      <>
        <Hero2 />
        {/* <NoArticles /> */}
        <ArtComp2
          savedArts={this.state.savedArts}
          title={this.state.title}
          summary={this.state.summary}
          url={this.state.url}
          componentDidMount={this.componentDidMount}
        />
      </>
    )
  }
}

export default Saved