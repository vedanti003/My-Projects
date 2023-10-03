import React from 'react'
import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Slidebar from "../../components/slidebar/Slidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "../home/home.css"

const Profile = () => {
  return (
    <div>
      <Topbar/>
        <div className="profile">
          <Slidebar/>
          <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="assets/background.jpg" className='profileCoverImg' alt="" />
                    <img src="assets/post1.jpg" className='profileUserImg' alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Safak Kocaoglu</h4>
                    <span className="profileInfoDesc">Hello my friends</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
            </div>
          </div>
          
        </div>
        

    </div>
  )
}

export default Profile