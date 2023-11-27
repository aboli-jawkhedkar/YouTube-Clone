import React, {useEffect } from 'react'
import './Navbar.css'
import logo from './logo.ico'
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import {Link} from "react-router-dom";
import Searchbar from './Searchbar/Searchbar';
import { useDispatch, useSelector } from "react-redux";

import  GoogleLogin  from 'react-google-login';
//import { GoogleLogin } from 'react-google-login.js';
import {gapi} from 'gapi-script'
import { login } from '../../actions/auth';
import Auth from '../../Pages/Auth/Auth';
import { useState } from 'react';

function Navbar({toggleDrawer, setEditCreateChannelBtn}) {


  const [AuthBtn, setAuthBtn] = useState(false)
  // const CurrentUser=null;
  // const CurrentUser = {
  //   result: {
  //     email: "abc@gmail.com",
  //     joinedOn: "2222-07-15T09:57:23.489Z",
  //   },
  // }
  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId:
  //         "521819934797-vupbqk3960h628dfbhu2di1qkdh38obb.apps.googleusercontent.com",
  //       scope: "email",
  //     });
  //   }
  //   gapi.load("client:auth2", start);
  // }, []);

const CurrentUser=useSelector(state=>state.currentUserReducer)
console.log(CurrentUser)
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: "521819934797-vupbqk3960h628dfbhu2di1qkdh38obb.apps.googleusercontent.com",
        scope: "email",
      });
    }
  
    // Set COOP and COEP headers
    document.head.insertAdjacentHTML(
      'beforeend',
      '<meta http-equiv="Cross-Origin-Opener-Policy" content="same-origin">'
    );
    document.head.insertAdjacentHTML(
      'beforeend',
      '<meta http-equiv="Cross-Origin-Embedder-Policy" content="unsafe-none">'
    );
  
    gapi.load("client:auth2", start);
  }, []);
  
   const dispatch = useDispatch();
  const onSuccess = (response) => {
    const Email = response?.profileObj.email;
    console.log(Email);
    dispatch(login({email:Email}))
  };

  const onFailure = (response) => {
    console.log("Failed", response);
  };
  return (
    <>
    <div className='Container_Navbar'>
        <div className="Burger_logo_Navbar">
        <div className="Burger" onClick={()=>toggleDrawer()}>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <Link to={'/'}className='logo_div_Navbar'>
            <img src={logo} alt="Logo" />
            <p className='logo_title_navbar'>YouTube</p>
        </Link>

        </div>
       <Searchbar/> 
       
      <RiVideoAddLine size={22} className="vid_bell_Navbar"/>
      <div className="appsBox">
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
        <p className="appBox"></p>
       </div>
      <IoMdNotificationsOutline size={22} className="Mic_SearchBar" />
      <div className="Auth_cont_Navbar">
        {
          CurrentUser ?( 
          <>
          <div className="channel_logo_app" onClick={()=>setAuthBtn(true)}>
            <p className="fstChar_logo_app">
              {
                CurrentUser?.result.name ?(
                  <>
                  {CurrentUser?.result.name.charAt(0).toUpperCase()}
                  </>
                ):(
                  <>
                  {CurrentUser?.result.email.charAt(0).toUpperCase()}
                  </>
                )
              }
            </p>
          </div>
          </>
          ) : (
          <>
          <GoogleLogin
          clientId={"521819934797-vupbqk3960h628dfbhu2di1qkdh38obb.apps.googleusercontent.com"}
          onSuccess={onSuccess}
          onFailure={onFailure}
          render={(renderProps)=>(
            <p  onClick={renderProps.onClick} className="Auth_btn">
          <BiUserCircle size={22}/>
          <b>Sign In</b>
        </p>
          )}
          />
        
          </>
       )}
      </div>
       
    </div>
    {
      AuthBtn &&
      <Auth
      setEditCreateChannelBtn={setEditCreateChannelBtn}
      setAuthBtn={setAuthBtn}
      User={CurrentUser}
      />
    }
    </>
  )
}

export default Navbar