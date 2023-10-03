import React, { useState } from 'react'
import "./post.css"
// import Person1 from "assets/Person1.jpg";
import { MoreVert } from '@material-ui/icons';
// import heart from "../../../public/assets/heart-like-icon.png"
// import thumb  from "../../assets/thumb-like.jpg"
import { Users } from '../../dummyData';

export default function Post ({post}) {
  const [like,setLike] = useState(post.like)
  const [isLiked, setIsLike] = useState(false)

  const likeHandler=()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLike(!isLiked)
  }
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className='postProfileImg' src={Users.filter((u) => u.id === post.userID)[0].profilePicture1} alt=''/>
                <span className='postUsername'>
                  {Users.filter((u) => u.id === post.userID)[0].username}
                </span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className='postImg' src={post.photos} alt=''/>
        </div>
        <div className="postBottom"></div>
          <div className="postBottomLeft">
            <img className='likeIcon' src="assets/thumb-like.jpg" onClick={likeHandler} alt=''/>
            <img className='likeIcon' src="assets/heart-like-icon.png" onClick={likeHandler} alt=''/>
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
      </div>
    </div>
  )
}