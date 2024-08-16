// MessageModal.js
import React from "react";

const MessageModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <h2>Send a Message</h2>
        <textarea placeholder="Write your message here..." style={textareaStyle}></textarea>
        <div style={modalActionsStyle}>
          <button onClick={onClose} style={buttonStyle}>Close</button>
          <button style={buttonStyle}>Send</button>
        </div>
      </div>
    </div>
  );
};

// Modal Styles
const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "400px",
  maxWidth: "80%",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};

const textareaStyle = {
  width: "100%",
  height: "100px",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const modalActionsStyle = {
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "10px",
};

const buttonStyle = {
  marginLeft: "10px",
  padding: "8px 16px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#2874A6",
  color: "#fff",
  cursor: "pointer",
};

export default MessageModal;
