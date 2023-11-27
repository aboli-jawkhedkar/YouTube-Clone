import React from 'react'
// import vid from '../../Components/Video/vid.mp4'
import './VideoPage.css'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns'
import Comments from '../../Components/Comments/Comments'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import moment from 'moment'
import { useEffect } from 'react'
import { addToHistory } from '../../actions/History'
import { viewVideo } from '../../actions/video'
function VideoPage() {
    const CurrentUser=useSelector(state=>state?.currentUserReducer)
    const {vid}=useParams();
    // console.log(vid)
    // const channels = useSelector(state=>state?.channelReducers)
    // console.log(channels)
    // const currenChannel=channels.filter(c=>c._id===vid)[0];
  const vids=useSelector(state=>state.videoReducer);

  const vv = vids?.data.filter(q=> q._id===vid)[0];
  const dispatch = useDispatch()
  const handleHistory=()=>{
    dispatch(
        addToHistory({
                videoId: vid,
                Viewer: CurrentUser?.result._id,    
            })
    );
  };
  const handleViews=(vw)=>{
    dispatch(viewVideo({
        id:vid
    }))
  }
  useEffect(() => {
    if(CurrentUser){
    handleHistory();
}
handleViews();
  }, [])
  
  return (
    <>
    <div className="containerVideoPage">
        <div className="container2VideoPage">
            <div className="video_display_screen_videoPage">
                <video 
                src={`http://localhost:5500/${vv.filePath}`}
                className={"video_ShowVideo_videoPage"}
                controls
                //autoPlay

                >
                </video>
                <div className="video_details_videoPage">
                    <div className="video_btns_title_videoPage_container">
                        <p className="video_title_videoPage">{vv?.videoTitle}</p>
                        <div className="views_date_btns_videoPage">
                            <div className="views_videoPage">
                                {vv?.Views} views <div className="dot"></div> {moment(vv?.createAt).fromNow()}
                            </div>
                    <LikeWatchLaterSaveBtns vv={vv} vid={vid}/>
                        </div>
                    </div>
                    <Link to ={`/channel/${vv?.videoChannel}`} className="channel_details_videoPage">
                        <b className="channel_logo_videoPage">
                            <p>{vv?.Uploader}</p>
                        </b>
                        <p className="channel_name_videoPage">{vv?.Uploader}</p>
                    </Link>
                    <div className="comments_videoPage">
                        <h2><u>Comments</u></h2>
                        <Comments videoId={vv._id}/>
                    </div>
                </div>
            </div>
            <div className="moreVideoBar">
                More Video
            </div>
        </div>
    </div>
    </>
  )
}

export default VideoPage