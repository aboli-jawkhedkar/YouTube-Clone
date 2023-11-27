import React from 'react'
import { FaEdit, FaUpload } from 'react-icons/fa'
import './DescribeChannel.css'
import { useSelector } from 'react-redux'
function DescribeChannel({setEditCreateChannelBtn, Cid, setVidUploaPage}) {

    const channels = useSelector(state=>state?.channelReducers)
    // console.log(channels)
    const currenChannel=channels.filter(c=>c._id===Cid)[0];
    
    const CurrentUser=useSelector(state=>state?.currentUserReducer)
    // console.log(currenChannel)
  return (
    <div className='container3_channel'>
        <div className="channel_logo_channel">
            <b>
                {currenChannel?.name.charAt(0).toUpperCase()}
            </b>
        </div>
        <div className="description_channel">
            <b>{currenChannel?.name} </b>
            <p>{currenChannel?.desc}</p>
        </div>
        {
            CurrentUser?.result._id === currenChannel?._id &&
            (<>
            <p 
                className="edit_btn_channel" 
                 onClick={()=>{setEditCreateChannelBtn(true)}}
            >
                <FaEdit/>
                <b>Edit Channel</b>
            </p>
            <p 
                onClick={()=>{setVidUploaPage(true)}}
                className="upload_btn_channel">
                <FaUpload/>
                <b>Upload Video</b>
            </p>
            </>)
        }
        
    </div>
  )
}

export default DescribeChannel