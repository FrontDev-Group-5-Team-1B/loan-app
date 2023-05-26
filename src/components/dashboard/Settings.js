import React from 'react'
import Profile from '../pages/Profile'
import Notification from '../pages/Notification'
import Security from '../pages/Security'
import "../../styles/settings.css";

const Settings = () => {
  return (
    <div className="settings-wrapper">
        <h2>Settings</h2>
        <div className="settings-content">
        <Profile/>
        <Notification/>
        <Security/>
        </div>
    </div>
  )
}

export default Settings