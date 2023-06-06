import { React, useState } from "react";
import "../../styles/notification.css";

const ButtonSet = ({ defaultYesStyle, defaultNoStyle }) => {
  const [yesStyle, setYesStyle] = useState(defaultYesStyle);
  const [noStyle, setNoStyle] = useState(defaultNoStyle);

  const handleYesButtonClick = () => {
    setYesStyle({ backgroundColor: "blue", color: "white" });
    setNoStyle(defaultNoStyle);
  };

  const handleNoButtonClick = () => {
    setNoStyle({ backgroundColor: "blue", color: "white" });
    setYesStyle(defaultYesStyle);
  };

  return (
    <span>
      <button onClick={handleYesButtonClick} style={yesStyle} className="yes">
        Yes
      </button>
      <button onClick={handleNoButtonClick} style={noStyle} className="no">
        No
      </button>
    </span>
  );
};

const Notification = () => {
  const defaultButtonStyle = { backgroundColor: "white", color: "#333333" };
  return (
    <div>
      <h4 className="profile-hp">Notifications Settings</h4>
      <div>
        <ul className="notification-lists">
          <span className="notification-list">
            <li>Get notified when a message is sent</li>
            <span className="notifications-btn">
              <ButtonSet
                defaultYesStyle={defaultButtonStyle}
                defaultNoStyle={defaultButtonStyle}
              />
            </span>
          </span>
          <span className="notification-list">
            <li>Get notified when a message is received</li>
            <span className="notifications-btn">
              <ButtonSet
                defaultYesStyle={defaultButtonStyle}
                defaultNoStyle={defaultButtonStyle}
              />
            </span>
          </span>
          <span className="notification-list">
            <li>Get notified when a defaulter is detected</li>
            <span className="notifications-btn">
              <ButtonSet
                defaultYesStyle={defaultButtonStyle}
                defaultNoStyle={defaultButtonStyle}
              />
            </span>
          </span>
          <span className="notification-list">
            <li>Get notified when a loan is generated</li>
            <span className="notifications-btn">
              <ButtonSet
                defaultYesStyle={defaultButtonStyle}
                defaultNoStyle={defaultButtonStyle}
              />
            </span>
          </span>
        </ul>
      </div>
      <div className="cancle-save-btn">
        <button className="cancle">Cancel</button>
        <button className="save">Save</button>
      </div>
    </div>
  );
};

export default Notification;
