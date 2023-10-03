import React from 'react'
import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from '../online/Online'
import { Home } from '@material-ui/icons'

export default function Rightbar({profile}){

  const HomeRightbar = () => {
    return(
      <>
         <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/gift.jpeg" alt="" />
          <span className="birthdayText"><b>Pola Foster </b>and <b>3 other </b>friends have a birthday today</span>
        </div>
        <img className='rightbarAd' src="assets/ad1.jpg" alt="" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>

          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
    <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Mumbai, India</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Bangalore, India</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/Person1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/Person1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/Person1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/Person1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/Person1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/Person1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        

      </div>
    </>)
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
       {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}

