// src/theme/Root.js
import React from 'react';
import ChatbotPopup from '../components/ChatbotPopup';

// Default implementation, that you can customize
function Root({ children }) {
  return (
    <>
      {children}
      <ChatbotPopup />
    </>
  );
}

export default Root;