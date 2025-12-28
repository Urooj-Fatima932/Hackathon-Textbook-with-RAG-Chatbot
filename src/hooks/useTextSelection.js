// src/hooks/useTextSelection.js
import { useState, useEffect } from 'react';

const useTextSelection = () => {
  const [selectedText, setSelectedText] = useState('');

  useEffect(() => {
    const handleSelection = () => {
      const text = window.getSelection().toString().trim();
      if (text) {
        setSelectedText(text);
      }
    };

    const handleClick = () => {
      // Clear selection when clicking elsewhere
      setTimeout(() => {
        if (!window.getSelection().toString().trim()) {
          setSelectedText('');
        }
      }, 100);
    };

    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return { selectedText };
};

export default useTextSelection;