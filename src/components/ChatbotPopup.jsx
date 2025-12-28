// src/components/ChatbotPopup.jsx
import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';  // Removed as it's not needed anymore
import FloatingActionButton from './FloatingActionButton';
import ChatWindow from './ChatWindow';
import useChatState from '../hooks/useChatState';
import useTextSelection from '../hooks/useTextSelection';

const ChatbotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isLoading, sendMessage, clearChat } = useChatState();
  const { selectedText } = useTextSelection();

  // Toggle chat window
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Close chat window
  const closeChat = () => {
    setIsOpen(false);
  };

  // Store chat state in localStorage to persist across page navigations
  useEffect(() => {
    const stored = localStorage.getItem('chatbot-messages');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Note: This approach would require storing conversationId too
        // For now, we're just maintaining UI state
      } catch (e) {
        console.error('Error parsing stored chat messages:', e);
      }
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatbot-messages', JSON.stringify(messages));
    }
  }, [messages]);

  return (
    <>
      <FloatingActionButton onClick={toggleChat} isOpen={isOpen} />
      <ChatWindow
        isOpen={isOpen}
        onClose={closeChat}
        messages={messages}
        sendMessage={sendMessage}
        isLoading={isLoading}
      />
    </>
  );
};

export default ChatbotPopup;