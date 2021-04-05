import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css"

function Sidebar() {

    const recentItem=(topic)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C4D16AQF-FkeBG2b4oQ/profile-displaybackgroundimage-shrink_200_800/0/1601919888539?e=1623283200&v=beta&t=vY2AAt8AVru6MpfL5EhaGQL6LW6eYkir-yguTVPVi0A" alt=""/>
                <Avatar className="sidebar__avatar" />
                <h2>Samirul Alam</h2>
                <h4>samirul@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,456</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,232</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("develop")}
            </div>
        </div>
    )
}

export default Sidebar
