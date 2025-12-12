import React from 'react';

interface PlaceholderImageProps {
  type: string; // e.g., "Diagram"
  description: string; // e.g., "ROS 2 Node Graph"
  dimensions: string; // e.g., "800x400"
}

export default function PlaceholderImage({ type, description, dimensions }: PlaceholderImageProps): JSX.Element {
  return (
    <div
      style={{
        border: '2px dashed var(--ifm-color-emphasis-300)',
        borderRadius: '8px',
        padding: '24px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px', // Minimum height for visibility
        fontSize: '1.2em',
        color: 'var(--ifm-color-emphasis-700)',
        backgroundColor: 'var(--ifm-background-color)',
        margin: '24px 0', // Some margin top/bottom
      }}>
      <span>
        [{type}: {description} | {dimensions}]
      </span>
    </div>
  );
}
