import React, { Component } from 'react'
import SomeStore from '../../stores/SomeStore'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Nav from '../nav/Nav'
import Stats from '../stats/Stats'
import './layout.sass'

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      someKey: SomeStore.getAllStuff()
    }
    this._onChange = this._onChange.bind(this)
  }

   componentWillMount() {
    SomeStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    SomeStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      someKey: SomeStore.getAllStuff()
    })
  }

  render() {

    return (
      <div className="jm-layout-main-wrapper">
        <Sidebar />
        <Nav />
      </div>
    )
  }
}
