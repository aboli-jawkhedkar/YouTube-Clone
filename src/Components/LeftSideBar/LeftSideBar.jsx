import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineExplore} from 'react-icons/md'
import {MdOutlineSubscriptions} from 'react-icons/md'
import {MdOutlineVideoLibrary} from 'react-icons/md'
import shorts from './shorts.png'
import './LeftSideBar.css'
import { NavLink } from 'react-router-dom'
function LeftSideBar() {
  return (
    <div className='container_leftSidebar'>
        <NavLink to={'./'} className="icon_sidebar_div">
            <AiOutlineHome sixe={22} className="icon_sidebar"/>
            <div className="text_sidebar_icon">Home</div>
        </NavLink>    
        <div className="icon_sidebar_div">
            <MdOutlineExplore sixe={22} className="icon_sidebar"/>
            <div className="text_sidebar_icon">Explore</div>
        </div>    
        <div className="icon_sidebar_div">
            <img src={shorts} width={22} className="icon_sidebar" alt='img'/>
            <div className="text_sidebar_icon">Shorts</div>
        </div>    
        <div className="icon_sidebar_div">
            <MdOutlineSubscriptions sixe={22} className="icon_sidebar"/>
            <div className="text_sidebar_icon" style={{fontSize: "12px"}}>Subscriptions</div>
        </div> 
        <NavLink to={'/Library'} className="icon_sidebar_div">
            <MdOutlineVideoLibrary sixe={22} className="icon_sidebar"/>
            <div className="text_sidebar_icon">Library</div>
        </NavLink>   
    </div>
  )
}

export default LeftSideBar