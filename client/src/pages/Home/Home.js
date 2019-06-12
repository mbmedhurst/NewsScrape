import React, { Component } from 'react'
import TopNav from '../../components/TopNav'
import Hero from '../../components/Hero'
// import NoArticles from '../../components/NoArticles'
import Article from '../../components/Article'

class Home extends Component {
    render() {
        return (
            <>
            <TopNav />
            <Hero />
            {/* <NoArticles /> */}
            <Article />
            </>
        )
    }
}

export default Home