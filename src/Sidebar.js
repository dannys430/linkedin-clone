import React from 'react'
import './Sidebar.css'

import {Avatar} from '@material-ui/core'

function Sidebar() {
  return (
    <div className="sidebar">
      
      <div className="sidebar__top">
        <img alt=""/>
        <Avatar className="sidebar__avatar" />
        <h2>Daniel Singer</h2>
        <h4>Software Engineer - Javascript | React | Redux | MongoDB | Node | Express | Ruby on Rails | PostgreSQL</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">185</p>
        </div>
        <div className="sidebar__stat">
          <p>Views of your post</p>
          <p className="sidebar__statNumber">314</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
      
    </div>
  )
}

export default Sidebar
