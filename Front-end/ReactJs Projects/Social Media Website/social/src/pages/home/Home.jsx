import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Slidebar from "../../components/slidebar/Slidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"

const Home = () => {
  return (
    <div>
      <Topbar/>
        <div className="homeContainer">
          <Slidebar/>
          <Feed/>
          <Rightbar />
        </div>
        

    </div>
  )
}

export default Home;
