import React from 'react'
import LeftSideBar from '../LeftSideBar/LeftSideBar'

import './WHLcss.css'
import WHLVideoList from './WHLVideoList'
import { useDispatch, useSelector } from 'react-redux'
import { clearHistory } from '../../actions/History'
function WHL({page,videoList}) {
    const dispatch=useDispatch()
    const CurrentUser=useSelector(state=>state?.currentUserReducer)
    const handleClearHistory=()=>{
        if(CurrentUser){
            dispatch(clearHistory({
                userId:CurrentUser?.result._id
            }))
        }
    }
    return (
    <div className='container_Pages_App'>
        <LeftSideBar/>
        <div className="container2_Pages_App">
            <p className="container_whl">
                <div className="box_whl leftside_whl">
                    <b>Your {page} Shown Here </b>
                    {
                        page==="History"&&
                    
                    <div className="clear_history_btn" onClick={()=>handleClearHistory()}>
                        Clear History
                    </div>
                    }
                </div>
                <div className="rightsideWhl">
                    <h1>{page}</h1>
                    <div className="whl_list">
                        <WHLVideoList
                        page={page}
                        CurrentUser={CurrentUser?.result._id}
                        videoList={videoList}
                        />
                    </div>
                </div>
            </p>
        </div>
    </div>
  )
}

export default WHL