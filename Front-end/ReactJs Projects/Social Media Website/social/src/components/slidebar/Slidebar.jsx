import React from 'react'
import "./slidebar.css"
import { Bookmark, ChatOutlined, Event, Group, HelpOutline, PlayCircleFilledOutlined, QuestionAnswerOutlined, RssFeed, School, WorkOutline } from "@material-ui/icons"
import Feed from '../feed/Feed'
// import person2 from "../../assets/person2.jpg"
import { Users } from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend'

const Slidebar = () => {
  return (
    <div className='sidebar'> 
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
              <RssFeed className='sidebarIcon'/>
              <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
              <ChatOutlined className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
              <PlayCircleFilledOutlined className='sidebarIcon'/>
              <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
              <Group className='sidebarIcon'/>
              <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
              <Bookmark className='sidebarIcon'/>
              <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
              <HelpOutline/>
              <span className="sidebarListItemText"> &nbsp; Questions</span>
          </li>
          <li className="sidebarListItem">
              <WorkOutline className='sidebarIcon'/>
              <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
              <Event className='sidebarIcon'/>
              <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
              <School className='sidebarIcon'/>
              <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
          
            {Users.map(u=>(
              <CloseFriend key={u.id} user={u}/>
            ))}

        </ul>
      </div>
    </div>
  )
}

export default Slidebar
