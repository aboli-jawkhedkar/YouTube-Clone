import React from 'react'
import './ShowVideo.css'
import moment from 'moment'
import { Link } from 'react-router-dom'
function ShowVideo({vid}) {
  console.log(vid)
  return (
    <>
    <Link to={`/videopage/${vid?._id}`}>
        <video 
        src={`http://localhost:5500/${vid.filePath}`}
        className='video_showVideo'
        ></video>
    </Link>
    <div className="videoDescription">
      <div className="channel_logo_app">
        <div className="fstChar_logo_app">
          <>{vid?.Uploader?.charAt(0).toUpperCase()}</>
        </div>
      </div>
      <div className="videoDetails">
        <p className="title_vid_showVideo">{vid?.videoTitle}</p>
        <pre className="vid_views_UploadTime">{vid.Uploader}</pre>
        <pre className="vid_views_UploadTime">
          {vid?.Views} views <div className="dot"></div> {moment(vid?.createAt).fromNow()}
        </pre>
      </div>
    </div>
    </>
  )
}

export default ShowVideo