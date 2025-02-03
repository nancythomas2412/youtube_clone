import React from "react";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({sidebar}) => {
  return <div className={`sidebar ${sidebar ? '' : "small-sidebar"}`}>
    <div className="shortcut-links">
      <div className="side-link">
        <img src={home} alt="home image" /><p>Home</p>
      </div>
      <div className="side-link">
        <img src={game_icon} alt="home image" /><p>Gaming</p>
      </div><div className="side-link">
        <img src={automobiles} alt="home image" /><p>Automobiles</p>
      </div><div className="side-link">
        <img src={sports} alt="home image" /><p>Sports</p>
      </div><div className="side-link">
        <img src={entertainment} alt="home image" /><p>Entertainment</p>
      </div><div className="side-link">
        <img src={tech} alt="home image" /><p>Technology</p>
      </div><div className="side-link">
        <img src={music} alt="home image" /><p>Music</p>
      </div><div className="side-link">
        <img src={blogs} alt="home image" /><p>Blogs</p>
      </div><div className="side-link">
        <img src={news} alt="home image" /><p>News</p>
      </div>
      <hr />
    </div>
    <div className="subscribed-list">
      <h3>Subscribed</h3>
      <div className="side-link">
        <img src={jack} alt="jack image" /><p>PewDiePie</p>
      </div>
      <div className="side-link">
        <img src={simon} alt="simon image" /><p>MrBeast</p>
      </div><div className="side-link">
        <img src={tom} alt="tom image" /><p>Justin Beiber</p>
      </div>
      <div className="side-link">
        <img src={megan} alt="megan image" /><p>5-Minute Craft</p>
      </div>
      <div className="side-link">
        <img src={cameron} alt="cameron image" /><p>Nas Daily</p>
      </div>
    </div>
  </div>;
};

export default Sidebar;
