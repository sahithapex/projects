import React from 'react';
import './Sidebar.css';
import {MdSubscriptions,MdHistory,MdPerson ,MdOutlineShoppingCart , MdHome, MdMusicNote, MdSportsEsports, MdSportsCricket, MdMovie, MdOutlineNewspaper, MdOutlineScience, MdOutlineRssFeed } from "react-icons/md";
import danxavier from '../../assets/people/danxavier.jpg';
import justin from '../../assets/people/justin.jpg';
import simon from '../../assets/people/simon.jpg';
import stefan from '../../assets/people/stefan.jpg';
import { SiYoutubeshorts } from "react-icons/si";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaHotjar } from "react-icons/fa";

const Sidebar = ({Onmenu}) => {
  return (
    <div className={`${Onmenu ? "sidebar" : "small" }`}>
      <div className='shortcutlinks'>     
        <div className='side-link'>
          <MdHome size={28} /> <p className='para'>Home</p>
        </div>
        <div className='side-link'>
          <SiYoutubeshorts size={28} /> <p  className="para">Shorts</p>
        </div>
        <div className='side-link'>
          <MdSubscriptions size={28} /> <p className="para">Subscriptions</p>
        </div>
        <hr/>
        <div className='side-link'>
          <MdPerson size={28} /> <p className="para">You</p>
        </div>
        <div className='side-link'>
          <MdHistory size={28} /> <p className="para">History</p>
        </div>
        <hr/>
        <p className='marginmiddle'>Sign in to like videos, comment, and subscribe.</p>
        <div className='usersignin btntext'>
          <FaRegCircleUser/>
        <button className='btntext'>Signin</button>
        </div>
        <hr/>
       
        <h4 className='mar'>Explore</h4>
        <div className='side-link'>
          <FaHotjar size={28} /> <p className="para">Trending</p>
        </div>

        <div className='side-link'>
          <MdOutlineShoppingCart size={28} /> <p className="para">Shopping</p>
        </div>
        
        <div className='side-link'>
          <MdMusicNote size={28} /> <p className="para">Music</p>
        </div>
        <div className='side-link'>
          <MdSportsEsports size={28} /> <p className="para">Game</p>
        </div>
        <div className='side-link'>
          <MdSportsCricket size={28} /> <p className="para">Sports</p>
        </div>
        <div className='side-link'>
          <MdOutlineScience size={28} /> <p className="para">Technology</p>
        </div>
        <div className='side-link'>
          <MdMovie size={28} /> <p className="para">Movies</p>
        </div>
        <div className='side-link'>
          <MdOutlineNewspaper size={28} /> <p className="para">News</p>
        </div>
        <div className='side-link'>
          <MdOutlineRssFeed size={28} /> <p className="para">Blogger</p>
        </div>
       
        <hr/>
        <div className='side-link'>
          <MdSubscriptions size={28} /> <p className="para">Subscriptions</p>
        </div>
        <div className='subscribe '>
          <div className='Inrow'>
          <img src={justin} alt="PewDiePie" className='imgsetting' /><p className="para">PewDiePie</p>
          </div>
          <div className='Inrow' >
          <img src={stefan} alt="Docter Jack" className='imgsetting'  /><p className="para">Docter Jack</p>
          </div>
          <div className='Inrow'>
          <img src={danxavier} alt="Healthy way" className='imgsetting' /><p className="para">Healthy way</p>
          </div>
          <div className='Inrow'>
          <img src={simon} alt="fitness" className='imgsetting'  /><p className="para">fitness</p>
          </div>
          
          

        </div>
      </div>
    </div>
  );
}

export default Sidebar;
