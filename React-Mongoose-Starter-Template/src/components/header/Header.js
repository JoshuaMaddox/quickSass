import React, { Component } from 'react'
import SomeStore from '../../stores/SomeStore'
import './header.sass'

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      
      <h2 className='jm-header-title'>Here is the header</h2>
    )
  }
}
