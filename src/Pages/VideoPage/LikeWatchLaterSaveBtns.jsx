import React, { useEffect } from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {MdPlaylistAddCheck} from 'react-icons/md'
import {RiPlayListAddFill, RiShareForwardLine} from 'react-icons/ri'
import {AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import {RiHeartAddFill} from 'react-icons/ri'
import './LikeWatchLaterSaveBtns.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { likeVideo } from '../../actions/video'
import { addToLikedVideo, deletelikedVideo } from '../../actions/likedVideo'
import { addTowatchLater, deleteWatchLater } from '../../actions/watchLater'
function LikeWatchLaterSaveBtns({vv, vid}) {

    
    const CurrentUser=useSelector(state=>state?.currentUserReducer)

    const dispatch = useDispatch()
const [SaveVideo, setSaveVideo] = useState(false)
const [DislikeBtn, setDislikeBtn] = useState(false)
const [LikeBtn, setLikeBtn] = useState(false)
const likedVideoList = useSelector((state)=>state.likedVideoReducer)

const watchLaterList = useSelector(state=>state.watchLaterReducer)
useEffect(() => {
    likedVideoList?.data?.filter(q => q.videoId === vid && q?.Viewer === CurrentUser?.result._id).map(m => setLikeBtn(true));
    watchLaterList?.data?.filter(q => q.videoId === vid && q?.Viewer === CurrentUser?.result._id).map(m => setSaveVideo(true));
}, []);




const toggleSavedVideo=()=>{
    if(CurrentUser)
    {if(SaveVideo){
        setSaveVideo(false)
        dispatch(deleteWatchLater({
            videoId: vid,
            Viewer: CurrentUser?.result._id,           
        }))
        
    }
    else{
        setSaveVideo(true)
        dispatch(addTowatchLater({
            videoId: vid,
            Viewer: CurrentUser?.result._id,
            
        })
        )
    }}else{
        alert("Login to save the video")
    }
}

const toggleLikeBtn=(e, lk)=>{
    if(CurrentUser)
    {if (LikeBtn) {
        setLikeBtn(false);
        dispatch(
          likeVideo({
            id: vid,
            Like: lk - 1,
          })
        );
        dispatch(deletelikedVideo({
            videoId: vid,
            Viewer: CurrentUser?.result._id,

        }))
    }
    else{
        setLikeBtn(true);
        dispatch(
          likeVideo({
            id: vid,
            Like: lk + 1,
          })
        );
        dispatch(
            addToLikedVideo({
                videoId: vid,
                Viewer: CurrentUser?.result._id,
            })
        )
        setDislikeBtn(false)
        }
    }else{
        alert("please login to give a like")
    }
}

const toggleDislikeBtn=(e, lk)=>{
    if(CurrentUser)
    {if(DislikeBtn){
        setDislikeBtn(false)
    }
    else{
        setDislikeBtn(true)
        if (LikeBtn) {
            dispatch(
              likeVideo({
                id: vid,
                Like: lk - 1,
              })
            );
            dispatch(deletelikedVideo({
                videoId: vid,
                Viewer: CurrentUser?.result._id,
    
            }))
        }
        setLikeBtn(false)
        }
    }else{
        alert("Please login to dislike")
    }
}
  return (
    <div className='btns_cont_videoPage'>
        <div className="btn_videoPage">
            <BsThreeDots/>
        </div>
        <div className="btn_videoPage">
            <div className="like_videoPage" onClick={(e)=>toggleLikeBtn(e, vv.Like)}>
               {
                LikeBtn ? (
                <>
                <AiFillLike size={22} className='btns_videoPage'/>
                
                </>
                ):(<>
                <AiOutlineLike size={22} className='btns_videoPage'/>
                </>
                )
            }
            <b>{vv?.Views}</b>
            </div>
            <div className="like_videoPage" onClick={(e)=>toggleDislikeBtn(e, vv.Like)}>
               {
                DislikeBtn ? (
                <>
                <AiFillDislike size={22} className='btns_videoPage'/>
                
                </>
                ):(<>
                <AiOutlineDislike size={22} className='btns_videoPage'/>
                </>
                )
            }
            <b>DISLIKE</b>
            </div>
            <div className="like_videoPage" onClick={()=>toggleSavedVideo()}>
               {
                SaveVideo ? (
                <>
                <MdPlaylistAddCheck size={22} className='btns_videoPage'/>
                <b>Saved</b>
                </>
                ):(<>
                <RiPlayListAddFill size={22} className='btns_videoPage'/>
                
                <b>Save</b>
                </>
                )
               }
            </div>
            <div className="like_videoPage">
                <>
                <RiHeartAddFill size={22} className='btns_videoPage'/>
                <b>Thanks</b>
                </>
            </div>
            <div className="like_videoPage">
                <>
                <RiShareForwardLine size={22} className='btns_videoPage'/>
                <b>Share</b>
                </>
            </div>
        </div>
        </div>
  );
}

export default LikeWatchLaterSaveBtns