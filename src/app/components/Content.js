import React, { Component } from 'react'

import ContentBoxItem from './ContentBoxItem'

export default class Content extends Component {

  render () {
    return (
      <div className='content'>
        <div>Lorem ipsum dolor sit amet</div>
        <ContentBoxItem />
      </div>
    )
  }

}
