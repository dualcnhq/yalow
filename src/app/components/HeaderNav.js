import React, { Component } from 'react'

export default class HeaderNav extends Component {

  render () {
    return (
      <div>
        <div>The Yalow</div>
        <div>
          <button onClick={() => console.log('About Us')}>About Us</button>
          <button onClick={() => console.log('Services')}>Services</button>
          <button onClick={() => console.log('Contact')}>Contact</button>
        </div>
      </div>
    )
  }

}
