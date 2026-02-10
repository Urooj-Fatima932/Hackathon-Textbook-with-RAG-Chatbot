import React from 'react';

const FloatingActionButton = ({ onClick, isOpen }) => {
  const containerStyle = {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 9999,
  };

  const buttonStyle = {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)',
    backgroundColor: 'var(--ifm-color-primary)',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    transition: 'all 200ms ease-in-out',
    overflow: 'hidden',
  };

  return (
    <div style={containerStyle}>
      <button
        onClick={onClick}
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary-dark)';
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.boxShadow = '0 6px 28px rgba(16, 185, 129, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary)';
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(16, 185, 129, 0.3)';
        }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <div
          style={{
            transition: 'transform 250ms ease',
            transform: isOpen ? 'rotate(90deg)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <line x1="9" y1="10" x2="9.01" y2="10" strokeWidth="2.5" />
              <line x1="12" y1="10" x2="12.01" y2="10" strokeWidth="2.5" />
              <line x1="15" y1="10" x2="15.01" y2="10" strokeWidth="2.5" />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
};

export default FloatingActionButton;
