import React, { Component } from 'react'
import TopNav from '../../components/TopNav'
import Hero from '../../components/Hero'
import NoArticles from '../../components/NoArticles'

class Home extends Component {
    render() {
        return (
            <>
            <TopNav />
            <Hero />
            <NoArticles />
            </>
        )
    }
}

export default Home