import React, { Component } from 'react'

import HeaderNav from './HeaderNav'
import Carousel from './Carousel'
import Content from './Content'
import Footer from './Footer'

export default class App extends Component {

  render () {
    return (
      <div className='app'>
        <HeaderNav />
        <Carousel />
        <Content />
        <Footer />
      </div>
    )
  }
}
