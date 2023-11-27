import React from 'react'
import './Library.css'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import WHLVideoList from '../../Components/WHL/WHLVideoList'
//import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import { FaHistory } from 'react-icons/fa';
import vid from '../../Components/Video/vid.mp4'
//import { icons } from 'react-icons'
import { MdOutlineWatchLater } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'
import { useSelector } from 'react-redux';
function Library() {
  
  const CurrentUser=useSelector(state=>state?.currentUserReducer)
  const watchLaterList = useSelector(state=>state.watchLaterReducer)
  const historyList = useSelector(state=>state.HistoryReducer)
  const likedVideoLists = useSelector(state=>state.likedVideoReducer)
  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //     Channel: "62bafe6752cea35a6c30685f",
  //     title: "video 1",
  //     Uploader: "abc",
  //     description: "description of  video 1",
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid,
  //     Channel: "cdd",
  //     title: "video 2",
  //     Uploader: "abc",
  //     description: "description of  video 2",
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid,
  //     Channel: "add",
  //     title: "video 3",
  //     Uploader: "abc",
  //     description: "description of  video 3",
  //   },
  //   {
  //     _id: 4,
  //     video_src: vid,
  //     Channel: "add",
  //     title: "video 3",
  //     Uploader: "abc",
  //     description: "description of  video 3",
  //   },
  // ];
  return (
    <div className='container_Pages_App'>
        <LeftSideBar/>
    <div className="container2_Pages_App">
        <div className="container_libraryPage">
            <h1 className='title_container_libraryPage'>
              <b>
                <FaHistory/>
              </b>
              <b>History</b>
            </h1>
            <div className="container_videoList_libraryPage">
              <WHLVideoList
              page={"History"}
              CurrentUser={CurrentUser?.result._id}
              videoList={historyList}
              />
            </div>
        </div>
        <div className="container_libraryPage">
            <h1 className='title_container_libraryPage'>
              <b>
                <MdOutlineWatchLater/>
              </b>
              <b>Watch Later</b>
            </h1>
            <div className="container_videoList_libraryPage">
              <WHLVideoList
              page={"Watch Later"}
              videoList={watchLaterList}
              />
            </div>
        </div>
        <div className="container_libraryPage">
            <h1 className='title_container_libraryPage'>
              <b>
                <AiOutlineLike/>
              </b>
              <b>Liked Videos</b>
            </h1>
            <div className="container_videoList_libraryPage">
              <WHLVideoList
              page={"Liked Videos"}
              videoList={likedVideoLists}
              />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Library