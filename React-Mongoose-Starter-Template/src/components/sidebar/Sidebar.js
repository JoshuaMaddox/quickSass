import React, { Component } from 'react'
import './sidebar.sass'

export default class Sidebar extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="jm-sidebar-container">
        <ul className="jm-sidebar-navigation">
          <li className="jm-sidebar-nav-logo"><p className='jm-sidebar-logo'>The Dash</p></li>
          <li className="jm-sidebar-nav-item"><a className='jm-sidebar-anchor'><i className="fa fa-tachometer jm-sidebar-icon"></i>Dashboard</a></li>
          <li className="jm-sidebar-nav-item"><a className='jm-sidebar-anchor'><i className="fa fa-area-chart jm-sidebar-icon"></i>Charts & Graphs</a></li>
          <li className="jm-sidebar-nav-item"><a className='jm-sidebar-anchor'><i className="fa fa-cogs jm-sidebar-icon"></i>Widgets</a></li>
          <li className="jm-sidebar-nav-item"><a className='jm-sidebar-anchor'><i className="fa fa-table jm-sidebar-icon"></i>Tables</a></li>
          <li className="jm-sidebar-nav-item"><a className='jm-sidebar-anchor'><i className="fa fa-tasks jm-sidebar-icon"></i>Forums</a></li>
        </ul>
      </div>
    )
  }
}
