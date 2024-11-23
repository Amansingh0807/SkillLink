import React from "react";
import CommunityTab from "../temcommunity/CommunityTab";
import "./Community.scss"; 

const Community = () => {
    return (
        <div className="community-page">
            <div className="welcome-section">
                <h1>Welcome to the Community!</h1>
                <p>Engage with discussions, share knowledge, and collaborate!</p>
            </div>
            <CommunityTab />
        </div>
    );
};

export default Community;
