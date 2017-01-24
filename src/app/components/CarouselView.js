import React, { Component } from 'react'
import Carousel from 'nuka-carousel'

export default class CarouselView extends Component {

  render () {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className='container'>
        <Carousel autoPlay={true} ref='carousel'>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
        </Carousel>
        <div className='sub-carousel'>
          <button onClick={() => { this.refs.carousel.goToSlide(0) }}>Better Design</button>
          <button onClick={() => { this.refs.carousel.goToSlide(1) }}>Customise</button>
          <button onClick={() => { this.refs.carousel.goToSlide(2) }}>Its free</button>
        </div>
      </div>
    )
  }
}
