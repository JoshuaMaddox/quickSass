import React, { Component } from 'react'
import './stats.sass'

export default class Stats extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="jm-stats-container">
        <div className="jm-stats-inner-container">
          <div className="jm-stats-banner">
          </div>
          <div className="jm-state-some-new-thing">
            <h3 className="jm-stats-header">A Lovely Header</h3>
            <p className="jm-stats-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem obcaecati excepturi dolore, ipsa libero. Libero harum fuga corporis, temporibus omnis officia, perferendis animi in officiis obcaecati totam dignissimos nihil sed.</p>
          </div>
        </div>
      </div>
    )
  }
}
