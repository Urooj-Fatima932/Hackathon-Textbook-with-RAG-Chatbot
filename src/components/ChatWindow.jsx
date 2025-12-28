import React, { useState, useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';
import useTextSelection from '../hooks/useTextSelection';

const ChatWindow = ({ isOpen, onClose, messages, sendMessage, isLoading }) => {
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const { selectedText } = useTextSelection();

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return; // Prevent multiple submissions

    // Capture the message BEFORE clearing input
    const messageToSend = selectedText ? `${inputValue} (Based on selected text: "${selectedText}")` : inputValue;

    // Clear input IMMEDIATELY to give instant feedback
    setInputValue('');

    // Send message (this runs in background while input is already cleared)
    sendMessage(messageToSend);
  };

  // Focus input when chat window opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 100);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  // Responsive width and height based on screen size
  const isMobile = window.innerWidth <= 768;
  const width = isMobile ? '90vw' : '400px';
  const maxWidth = isMobile ? '95vw' : '400px';
  const height = isMobile ? '70vh' : '500px';

  // Define styles as objects
    const containerStyle = {
      position: 'fixed',
      bottom: isMobile ? '10px' : '80px', // Adjusted position for mobile
      right: isMobile ? '5vw' : '24px', // Adjusted position for mobile
      width: width,
      height: height,
      maxWidth: maxWidth,
      backgroundColor: 'var(--ifm-background-color)',
      borderRadius: '8px', // rounded-lg
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', // shadow-xl
      border: '1px solid var(--custom-borders-dividers)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 9998,
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'all 300ms',
      overflowY: 'hidden' // Ensure the container itself doesn't scroll, content inside will
    };
  
    const headerStyle = {
      padding: isMobile ? '12px' : '16px', // p-3 or p-4
      borderBottom: '1px solid var(--custom-borders-dividers)',
      backgroundColor: 'var(--ifm-background-color)',
      borderRadius: '8px 8px 0 0' // rounded-t-lg
    };
  
    const headerContentStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    };
  
    const titleStyle = {
      fontSize: isMobile ? '1rem' : '1.125rem', // text-base or text-lg
      fontWeight: 500, // font-medium
      color: 'var(--ifm-font-color-base)'
    };
  
    const closeBtnStyle = {
      color: 'var(--custom-text-secondary)',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      fontSize: isMobile ? '1rem' : '1.25rem' // h-4 or h-5 w-5
    };

    const messagesContainerStyle = {

      flex: 1,

      overflowY: 'auto',

      padding: isMobile ? '12px' : '16px', // p-3 or p-4

      backgroundColor: 'var(--ifm-background-color)'

    };

  

    const emptyStateContainerStyle = {

      display: 'flex',

      flexDirection: 'column',

      alignItems: 'center',

      justifyContent: 'center',

      height: '100%',

      textAlign: 'center',

      padding: isMobile ? '12px' : '16px', // p-3 or p-4

      color: 'var(--custom-text-secondary)'

    };

  

    const messageListStyle = {

      display: 'flex',

      flexDirection: 'column',

      gap: isMobile ? '8px' : '12px' // space-y-2 or space-y-3

    };

  

    const inputAreaStyle = {

      padding: isMobile ? '12px' : '16px', // p-3 or p-4

      borderTop: '1px solid var(--custom-borders-dividers)',

      backgroundColor: 'var(--ifm-background-color)',

      borderRadius: '0 0 8px 8px' // rounded-b-lg

    };

  

    const formStyle = {

      display: 'flex',

      flexDirection: isMobile ? 'column' : 'row', // Stack on mobile

      gap: isMobile ? '8px' : '8px' // space-y-2 or space-x-2

    };

  

    const inputStyle = {

      flex: 1,

      padding: isMobile ? '10px' : '8px 12px', // py-2.5 or px-3 py-2

      border: '1px solid var(--custom-borders-dividers)',

      borderRadius: '6px', // rounded-md

      outline: 'none',

      backgroundColor: 'var(--ifm-background-color)',

      color: 'var(--ifm-font-color-base)',

      fontSize: isMobile ? '0.9rem' : '1rem',

      minHeight: '40px'

    };

  

    const sendBtnStyle = {

      padding: isMobile ? '10px 16px' : '8px 16px', // py-2.5 px-4 or px-4 py-2

      backgroundColor: isLoading ? 'var(--ifm-color-primary-dark)' : 'var(--ifm-color-primary)',

      color: 'white',

      borderRadius: '6px', // rounded-md

      border: 'none',

      cursor: isLoading ? 'not-allowed' : 'pointer',

      transition: 'all 200ms ease-in-out',

      minHeight: '40px',

      fontSize: isMobile ? '0.9rem' : '1rem',

      opacity: isLoading ? 0.6 : 1

    };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <div style={headerContentStyle}>
          <h3 style={titleStyle}>Chat with Documentation</h3>
          <button
            onClick={onClose}
            style={closeBtnStyle}
            aria-label="Close chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" style={{ width: isMobile ? '16px' : '20px', height: isMobile ? '16px' : '20px' }} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Messages Container */}
      <div style={messagesContainerStyle}>
        {messages.length === 0 ? (
          <div style={emptyStateContainerStyle}>
            <div style={{ marginBottom: '16px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ width: isMobile ? '40px' : '48px', height: 
              isMobile ? '40px' : '48px', margin: '0 auto', color: 'var(--custom-text-secondary)' }} fill="none" vie
              wBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <p>Start a conversation to get help with the documentation.</p>
                        {selectedText && (
                          <div style={{
                            marginTop: '16px',
                            padding: '12px',
                            backgroundColor: 'var(--ifm-color-primary-lightest)',
                            borderRadius: '6px',
                            textAlign: 'left'
                          }}>
                            <p style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '4px', color: 'var(--ifm-color-primary-darkest)' }}>Selected text:</p>
                            <p style={{ fontSize: '0.75rem', fontStyle: 'italic', color: 'var(--custom-text-secondary)' }}>"{selectedText}"</p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div style={messageListStyle}>
                        {messages.map((message, index) => (
                                        <MessageBubble
                                          key={message.id || `msg-${index}`}
                                          message={message}
                                          isMobile={isMobile}
                                        />                        ))}
                        {isLoading && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px' }}>
                            <style>
                              {`
                                @keyframes blink {
                                  0%, 100% { opacity: 1; }
                                  50% { opacity: 0.3; }
                                }
                              `}
                            </style>
                            <div style={{
                              width: '12px',
                              height: '12px',
                              backgroundColor: 'orange',
                              borderRadius: '50%',
                              animation: 'blink 1.5s ease-in-out infinite'
                            }}></div>
                          </div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>
                    )}
                  </div>
            
                  {/* Input Area */}
                  {selectedText && (
                    <div style={{
                      padding: '12px',
                      backgroundColor: 'var(--ifm-color-primary-lightest)',
                      fontSize: '0.875rem',
                      color: 'var(--ifm-color-primary-darkest)'
                    }}>
                      Using selected text: "{selectedText.substring(0, 50)}{selectedText.length > 50 ? '...' : ''}"
                    </div>
                  )}
      <form onSubmit={handleSubmit} style={inputAreaStyle}>
        <div style={formStyle}>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={isLoading ? "Processing your message..." : "Type your question..."}
            style={inputStyle}
            disabled={isLoading}
          />
                    <button
                      type="submit"
                      style={sendBtnStyle}
                      onMouseEnter={(e) => {
                        if (!isLoading) {
                          e.target.style.backgroundColor = 'var(--ifm-color-primary-dark)';
                          e.target.style.transform = 'scale(1.05)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isLoading) {
                          e.target.style.backgroundColor = 'var(--ifm-color-primary)';
                          e.target.style.transform = 'scale(1)';
                        }
                      }}
                      disabled={!inputValue.trim() || isLoading}
                    >
                      {isLoading ? 'Sending...' : 'Send'}
                    </button>
                  </div>
                </form>
              </div>
            );
          };

export default ChatWindow;