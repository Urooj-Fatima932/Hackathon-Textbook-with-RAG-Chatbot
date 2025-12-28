import React, { useState, useEffect } from 'react';

const FloatingActionButton = ({ onClick, isOpen }) => {
  const [isVisible, setIsVisible] = useState(true);  // This is the original state, keep it
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Disable hiding on scroll - always show the button
      setIsVisible(true);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Define styles as objects (using CSS media queries via style attributes isn't possible,
  // so we'll use a class-based approach with CSS in the document head)
  const containerStyle = {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 9999,
    transition: 'all 300ms',
    transform: isVisible ? 'translateY(0)' : 'translateY(16px)', // 4 * 4px
    opacity: isVisible ? 1 : 0
  };

    const buttonStyle = {

      width: '56px',

      height: '56px',

      borderRadius: '50%',

      display: 'flex',

      alignItems: 'center',

      justifyContent: 'center',

      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',

      backgroundColor: 'var(--ifm-color-primary)', // Use theme color

      color: 'white',

      border: 'none',

      cursor: 'pointer',

      outline: 'none',

      transition: 'all 200ms ease-in-out',

      fontSize: '24px', // Larger for emoji

      overflow: 'hidden' // To contain the hover effect

    };

  

    return (

      <div style={containerStyle} className="fab-container">

        <button

          onClick={onClick}

          style={buttonStyle}

          className="fab-button"

          onMouseEnter={(e) => {

            e.target.style.backgroundColor = 'var(--ifm-color-primary-dark)'; // Use theme hover color

            e.target.style.transform = 'scale(1.1)';

          }}

          onMouseLeave={(e) => {

            e.target.style.backgroundColor = 'var(--ifm-color-primary)'; // Revert to theme color

            e.target.style.transform = 'scale(1)';

          }}

          aria-label={isOpen ? "Close chat" : "Open chat"}

        >
        <div
          style={{
            transition: 'transform 200ms',
            transform: isOpen ? 'rotate(45deg)' : 'none'
          }}
        >
          {(isOpen) ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '24px', height: '24px', color: 'white' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            '🤖' // Robot emoji when closed
          )}
        </div>
      </button>
    </div>
  );
};

export default FloatingActionButton;