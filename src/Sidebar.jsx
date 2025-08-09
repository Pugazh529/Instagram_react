import React from 'react'

import instgramnameimg from "./assets/Instagram_logo.svg.png"

import { useNavigate } from 'react-router-dom'

function Sidebar() {

    const navigate = useNavigate();
    return (
        <div className='sidebar m-3 position-fixed'>
            <div className='d-flex flex-column gap-3 sidebarlogo'>
                <img src={instgramnameimg} alt="Instagram" />
                <div><i className="bi bi-house-door"></i>Home</div>
                <div><i className="bi bi-search-heart"></i>Search</div>
                <div><i className="bi bi-compass"></i>Explore</div>
                <div><i className="bi bi-collection-play"></i>Reels</div>
                <div><i className="bi bi-chat-heart"></i>Messages</div>
                <div><i className="bi bi-heart"></i>Notification</div>
                <div><i className="bi bi-plus-square"></i>Create</div>
                <div onClick={()=>{navigate('/profile')}}><i className="bi bi-person-circle"></i>Profile</div>
            </div>
            <div className='d-flex flex-column gap-3 position-fixed bottom-0'>
                <div><i className="bi bi-threads"></i> Thread</div>
                <div><i className="bi bi-list"></i>More</div>
            </div>
        </div>
    )
}

export default Sidebar