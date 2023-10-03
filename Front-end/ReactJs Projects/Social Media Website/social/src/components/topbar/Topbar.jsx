import React from 'react'
import "./topbar.css"
// import person from "../../assets/Person1.jpg"
import { Search, Person, Chat, Notifications} from '@material-ui/icons'

const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">Socialize</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
            <Search className='searchIcon'/>
            <input placeholder='Search for friend, post or video' className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <span className="topbarLink">Homepage</span>
        <span className="topbarLink">Timeline</span>
      </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <Person/>
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Chat/>
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Notifications/>
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
      <img src="assets/Person1.jpg" className="topbarImg"/>
    </div>
  )
}

export default Topbar
