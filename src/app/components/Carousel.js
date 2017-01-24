import React, { Component } from 'react'
import Slider from 'react-slick'

import CarouselNavigation from './CarouselNavigation'

export default class Carousel extends Component {

  render () {

    var settings = {
      dots: true
    }

    return (
      <div>
        <div className='container'>
          <Slider {...settings}>
            <div><img src='http://placekitten.com/g/400/200' /></div>
            <div><img src='http://placekitten.com/g/400/200' /></div>
            <div><img src='http://placekitten.com/g/400/200' /></div>
          </Slider>
        </div>

        <CarouselNavigation />
      </div>
    )
  }
}
