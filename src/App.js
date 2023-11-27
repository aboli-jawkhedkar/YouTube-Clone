
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import {
  BrowserRouter as Router
} from "react-router-dom";
import AllRoutes from './Components/AllRoutes';
import DrawerSidebar from './Components/LeftSideBar/DrawerSidebar';
import { useState } from 'react';
import CreateEditChannel from './Pages/Channel/CreateEditChannel';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllChannel } from './actions/channelUser';
import VideoUpload from './Pages/VideoUpload/VideoUpload';
import { getAllVideo } from './actions/video';
import { getAlllikedVideo } from './actions/likedVideo';
import { getAllwatchLater } from './actions/watchLater';
import { getAllHistory } from './actions/History';

function App() {
const dispatch=useDispatch()
  useEffect(() => {
    dispatch(fetchAllChannel());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());

  }, [dispatch])
  
  const[toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display:"none"

  })
  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display==="none"){
      setToggleDrawerSidebar({
        display:"flex"
      })
    }
    else{
      setToggleDrawerSidebar({
        display:"none"
      })
    }
  }
  const [vidUploaPage, setVidUploaPage] = useState(false)
  const [EditCreateChannelBtn, setEditCreateChannelBtn] = useState(false)
  return (

    <Router>
      { vidUploaPage && <VideoUpload setVidUploaPage={setVidUploaPage}/> }
      {
        EditCreateChannelBtn &&
        <CreateEditChannel setEditCreateChannelBtn={setEditCreateChannelBtn} />
      }
      <Navbar
      setEditCreateChannelBtn={setEditCreateChannelBtn}
      toggleDrawer={toggleDrawer}
      />
      {
        <DrawerSidebar
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
        />
      }
      <AllRoutes setVidUploaPage={setVidUploaPage} setEditCreateChannelBtn={setEditCreateChannelBtn} />
    </Router>
  );
}

export default App;
