import React from 'react'
import Buttons from '../layouts/Buttons'

const Notification = () => {
  return (
    <div>
        <h4>Notifications Settings</h4>
        <div>
            <ul>
                <li>Get notified when a message is sent</li>
                <li>Get notified when a message is received</li>
                <li>Get notified when a defaulter is detected</li>
                <li>Get notified when a loan is generated</li>
            </ul>
        </div>
        <Buttons/>
    </div>
  )
}

export default Notification