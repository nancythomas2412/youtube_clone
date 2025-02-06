import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const PlayVideo = ({ videoId }) => {
  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>Channel Description</h3>
      <div className="play-video-info">
        <p>1234 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            145
          </span>
          <span>
            <img src={dislike} alt="" />2
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Channel Name</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel Description</p>
        <p>Subscribe this channel to watch more videos</p>
        <hr />
        <h4>222 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Nancy <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              ad excepturi corrupti sequi. Esse architecto, ullam sint cumque
              rem commodi, saepe fuga voluptate aperiam qui nihil hic, molestias
              enim. Amet.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>323</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Nancy <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              ad excepturi corrupti sequi. Esse architecto, ullam sint cumque
              rem commodi, saepe fuga voluptate aperiam qui nihil hic, molestias
              enim. Amet.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>323</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Nancy <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              ad excepturi corrupti sequi. Esse architecto, ullam sint cumque
              rem commodi, saepe fuga voluptate aperiam qui nihil hic, molestias
              enim. Amet.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>323</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Nancy <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              ad excepturi corrupti sequi. Esse architecto, ullam sint cumque
              rem commodi, saepe fuga voluptate aperiam qui nihil hic, molestias
              enim. Amet.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>323</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
