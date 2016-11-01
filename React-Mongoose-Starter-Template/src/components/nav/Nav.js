import React, { Component } from 'react'
import './navigation.sass'
import Stats from '../stats/Stats'

export default class Nav extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div>
        <div className="jm-nav-container">
          <ul className="jm-nav-navigation">
            <li className="jm-nav-item"><a href="#" className="jm-nav-anchor"><i className="fa fa-plus jm-nav-icon"></i>Welcome</a></li>
            <li className="jm-nav-item"><a href="#" className="jm-nav-anchor"><i className="fa fa-comments jm-nav-icon"></i>Messages</a></li>
            <li className="jm-nav-item"><a href="#" className="jm-nav-anchor"><i className="fa fa-sliders jm-nav-icon"></i>Settings</a></li>
            <li className="jm-nav-item"><a href="#" className="jm-nav-anchor"><i className="fa fa-sign-out jm-nav-icon"></i>Logout</a></li>
          </ul>
        </div>
        <Stats />
      </div>
    )
  }
}
