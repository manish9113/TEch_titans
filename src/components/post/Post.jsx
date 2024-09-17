import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Paper } from "@mui/material";

import { useState } from "react";

export default function Post() {
  const [like, setLike] = useState(10);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <Paper className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/img13.jpg"
              alt="hello"
            />
            <span className="postUsername">Anupam Mondal</span>
            <span className="postDate">24-1-2024</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">After doing 4 jobs I successfully cracked microsoft interview.Going for my internship for next two months....</span>
          <img className="postImg" src="/assets/person/imgm_1.jpg" alt="postimg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">Comments...</span>
          </div>
        </div>
      </div>
    </Paper>
  );
}
