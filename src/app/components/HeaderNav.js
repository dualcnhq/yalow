import React, { Component } from 'react'

export default class HeaderNav extends Component {

  render () {
    return (
      <header>
        <span>The Yalow</span>
        <span className='row'>
          <button onClick={() => console.log('About Us')}>About Us</button>
          <button onClick={() => console.log('Services')}>Services</button>
          <button onClick={() => console.log('Contact')}>Contact</button>
        </span>
      </header>
    )
  }

}
