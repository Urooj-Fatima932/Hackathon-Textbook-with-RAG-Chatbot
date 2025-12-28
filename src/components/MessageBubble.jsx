import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MessageBubble = ({ message, isMobile = false }) => {
  const isUser = message.role === 'user';

  const containerStyle = {
    display: 'flex',
    justifyContent: isUser ? 'flex-end' : 'flex-start',
    width: '100%'
  };

  const bubbleStyle = {
    maxWidth: isMobile ? '90%' : '85%',
    borderRadius: '16px', // rounded-2xl
    paddingLeft: isMobile ? '12px' : '16px', // p-3 or p-4
    paddingRight: isMobile ? '12px' : '16px',
    paddingTop: isMobile ? '10px' : '12px', // py-2.5 or py-3
    paddingBottom: isMobile ? '10px' : '12px',
    backgroundColor: isUser ? 'var(--ifm-color-primary)' : 'var(--ifm-background-color)',
    color: isUser ? 'white' : 'var(--ifm-font-color-base)',
    ...(isUser
      ? { borderRadius: '16px 0 16px 16px' } // rounded-br-none
      : { borderRadius: '0 16px 16px 16px' }), // rounded-bl-none
    fontSize: isMobile ? '0.85rem' : '0.875rem' // text-sm or prose-sm
  };

  const proseStyle = {
    maxWidth: 'none',
    fontSize: isMobile ? '0.85rem' : '0.875rem' // text-sm or prose-sm
  };

  const markdownComponents = {
    p: ({ node, ...props }) => <p style={{ marginBottom: isMobile ? '6px' : '8px' }} {...props} />,
    ul: ({ node, ...props }) => <ul style={{ listStyleType: 'disc', paddingLeft: isMobile ? '16px' : '20px', marginBottom: isMobile ? '6px' : '8px' }} {...props} />,
    ol: ({ node, ...props }) => <ol style={{ listStyleType: 'decimal', paddingLeft: isMobile ? '16px' : '20px', marginBottom: isMobile ? '6px' : '8px' }} {...props} />,
    li: ({ node, ...props }) => <li style={{ marginBottom: isMobile ? '3px' : '4px' }} {...props} />,
    strong: ({ node, ...props }) => <strong style={{ fontWeight: 'bold' }} {...props} />,
    em: ({ node, ...props }) => <em style={{ fontStyle: 'italic' }} {...props} />,
        code: ({ node, ...props }) => (
          <code
            style={{
              backgroundColor: 'var(--docusaurus-highlighted-code-line-bg)',
              color: 'var(--ifm-font-color-base)',
              paddingLeft: isMobile ? '4px' : '6px', // px-1 or px-1.5
              paddingRight: isMobile ? '4px' : '6px',
              paddingTop: isMobile ? '1px' : '2px', // py-0 or py-0.5
              paddingBottom: isMobile ? '1px' : '2px',
              borderRadius: '4px', // rounded
              fontSize: isMobile ? '0.8rem' : '0.875em', // text-xs or text-sm
              fontFamily: 'monospace' // font-mono
            }}
            {...props}
          />
        ),
        pre: ({ node, ...props }) => (
          <pre
            style={{
              backgroundColor: '#1f2937', // bg-gray-800 (same for both modes for consistency)
              color: '#f3f4f6', // text-gray-100 (same for both modes)
              padding: isMobile ? '8px' : '12px', // p-2 or p-3
              borderRadius: '4px', // rounded
              marginTop: isMobile ? '6px' : '8px', // my-2
              marginBottom: isMobile ? '6px' : '8px',
              overflowX: 'auto', // overflow-x-auto
              fontSize: isMobile ? '0.8rem' : '0.875em' // text-xs or text-sm
            }}
            {...props}
          />
        ),
        h1: ({ node, ...props }) => <h1 style={{ fontSize: isMobile ? '1.1rem' : '1.25rem', fontWeight: 'bold'
    , marginTop: isMobile ? '12px' : '16px', marginBottom: isMobile ? '6px' : '8px' }} {...props} />,
        h2: ({ node, ...props }) => <h2 style={{ fontSize: isMobile ? '1rem' : '1.125rem', fontWeight: 'bold',
     marginTop: isMobile ? '10px' : '12px', marginBottom: isMobile ? '6px' : '8px' }} {...props} />,
            h3: ({ node, ...props }) => <h3 style={{ fontSize: isMobile ? '0.9rem' : '1rem', fontWeight: 'bold', marginTop: isMobile ? '8px' : '8px', marginBottom: isMobile ? '4px' : '4px' }} {...props} />,
        a: ({ node, ...props }) => (
          <a
            style={{
              color: 'var(--ifm-color-primary)',
              textDecoration: 'underline' // hover:underline (always underlined for simplicity)
            }}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote
            style={{
              borderLeft: '4px solid var(--custom-borders-dividers)',
              paddingLeft: isMobile ? '12px' : '16px', // pl-3 or pl-4
              fontStyle: 'italic',
              color: 'var(--custom-text-secondary)',
              margin: 0,
              marginBottom: isMobile ? '6px' : '8px'
            }}
            {...props}
          />
        )
  };

  return (
    <div style={containerStyle}>
      <div style={bubbleStyle}>
        <div style={proseStyle}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {message.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;