import React, { Component }from 'react'

export default class CarouselNavigation extends Component {

  render () {
    return (
      <div>
        <button onClick={() => console.log('Should go to carousel slide 1')}>Better Design</button>
        <button onClick={() => console.log('Should go to carousel slide 2')}>Customise</button>
        <button onClick={() => console.log('Should go to carousel slide 3')}>Its free</button>
      </div>
    )
  }

}
