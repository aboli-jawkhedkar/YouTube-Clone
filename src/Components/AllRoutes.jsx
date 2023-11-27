import React from 'react'
import Home from '../Pages/Home/Home'
import {
  Routes,
  Route
} from "react-router-dom";
import Library from "../Pages/Library/Library";
import LikedVideos from "../Pages/LikedVideos/LikedVideos";
import YourVideos from "../Pages/YourVideos/YourVideos";
import WatchHistory from "../Pages/WatchHistory/WatchHistory";
import WatchLater from "../Pages/WatchLater/WatchLater";
import VideoPage from '../Pages/VideoPage/VideoPage';
import Channel from '../Pages/Channel/Channel';
import Search from '../Pages/Search/Search';
function AllRoutes({setEditCreateChannelBtn, setVidUploaPage}) {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/history' element={<WatchHistory/>}/>
        <Route path='/watchlater' element={<WatchLater/>}/>
        <Route path='/likedvideos' element={<LikedVideos/>}/>
        <Route path='/yourvideos' element={<YourVideos/>}/>
        <Route path='/videopage/:vid' element={<VideoPage/>}/>
        <Route path='/search/:searchQuery' element={<Search/>}/>
        <Route 
        path='/channel/:Cid' 
        element={<Channel 
        setVidUploaPage={setVidUploaPage}
        setEditCreateChannelBtn={setEditCreateChannelBtn}/>}/>
    </Routes>
  )
}

export default AllRoutes