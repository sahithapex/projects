import './Navbar.css';
import { FiMenu } from "react-icons/fi"; 
import { GoSearch } from "react-icons/go";
import { IoCloudUpload } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import logo from '../../assets/youtube_logo.png';
import { RiMoreFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";


const Navbar = ({setOnmenu}) => {

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <FiMenu className="menu-icon" onClick={() => setOnmenu(prev => !prev)}/>
        <img className="logo" src={logo} alt="YouTube logo" />
        <h1 className='logotext'>YouTube</h1>
      </div>

      <div className="nav-middle flex-div">
        <form className='formcss'>
          <input type="text" placeholder="Search" aria-label="Search videos" />
          <button type="submit" aria-label="Search">
            <GoSearch />
          </button>
        </form>
      </div>

      
      <div className="nav-right flex-div">
        <IoCloudUpload aria-label="Upload" />
        <RiMoreFill aria-label="More options" />
        <IoIosNotifications aria-label="Notifications" />
        <CgProfile className="user-icon" aria-label="Profile" />
      </div>
    </nav>
  );
}

export default Navbar;