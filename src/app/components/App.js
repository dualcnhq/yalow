import React, { Component } from 'react'

import HeaderNav from './HeaderNav'
import CarouselView from './CarouselView'
import Content from './Content'
import Footer from './Footer'

export default class App extends Component {

  render () {
    return (
      <div>
        <HeaderNav />
        <CarouselView />
        <Content />
        <Footer />
      </div>
    )
  }
}
