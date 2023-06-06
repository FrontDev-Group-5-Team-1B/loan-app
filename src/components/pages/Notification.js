import { React, useState, useEffect } from "react";
import "../../styles/notification.css";
import Modal from "../Modal";

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
  const [showModal, setShowModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  useEffect(() => {
    if (notificationModal) {
      const timer = setTimeout(() => {
        setNotificationModal(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notificationModal]);
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
        <button className="cancle" onClick={() => setShowModal(true)}>
          Cancle
        </button>
        {showModal && (
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <div className="profile-modal-content">
              <p>Are you sure you want to cancle changes</p>
              <div className="yes_no">
                <p className="yes" onClick={() => setShowModal(false)}>
                  Yes
                </p>
                <p className="no" onClick={() => setShowModal(false)}>
                  No
                </p>
              </div>
            </div>
          </Modal>
        )}
        <button className="save" onClick={() => setNotificationModal(true)}>
          Save
        </button>
        {notificationModal && (
          <Modal
            show={notificationModal}
            onClose={() => setNotificationModal(false)}
          >
            <div className="profile-modal2-content">
              <p>Your Settings has already been saved</p>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Notification;
