import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import './Home.css';

const Home = ({ Onmenu }) => {
  return (
    <div className="">
      <Sidebar Onmenu={Onmenu} />
      
    </div>
  );
};

export default Home;

