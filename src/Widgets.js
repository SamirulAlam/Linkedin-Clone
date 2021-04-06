import React from 'react';
import "./Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle=(heading,subtitle)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("MLH", "Top news - 232 readers")}
            {newsArticle("Covid", "Top news - 22 readers")}
            {newsArticle("Tesla", "Top news - 223 readers")}
            {newsArticle("React", "Top news - 2332 readers")}
            {newsArticle("Bitcoin", "Top news - 122 readers")}
            {newsArticle("LHD: Share", "Top news - 1225 readers")}
        </div>
    )
}

export default Widgets
