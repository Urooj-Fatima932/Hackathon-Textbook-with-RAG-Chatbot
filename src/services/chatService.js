// src/services/chatService.js
// Use window object to access environment variables in Docusaurus

// Configure this URL for production deployment
// For Hugging Face Spaces: https://urooj-fatima-docusaurus-chatbot-backend.hf.space
// For local development: http://localhost:8000
const DEPLOYMENT_URL = process.env.REACT_APP_API_BASE_URL || 'https://urooj-fatima-docusaurus-chatbot-backend.hf.space';

const getAPIBaseUrl = () => {
  // First check if we're in the browser and have window.env
  if (typeof window !== 'undefined' && window.env && window.env.REACT_APP_API_BASE_URL) {
    return window.env.REACT_APP_API_BASE_URL;
  }
  // Then check for process.env (for development builds)
  else if (typeof process !== 'undefined' && process.env && process.env.REACT_APP_API_BASE_URL) {
    return process.env.REACT_APP_API_BASE_URL;
  }
  // Use deployment URL or fallback to localhost for development
  else {
    return DEPLOYMENT_URL;
  }
};

const API_BASE_URL = getAPIBaseUrl();

export const chatService = {
  // Create a new conversation
  async createConversation() {
    try {
      console.log('Creating conversation at:', `${API_BASE_URL}/api/chat/start`);
      const response = await fetch(`${API_BASE_URL}/api/chat/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const result = await response.json();
      console.log('Conversation created:', result);
      return result;
    } catch (error) {
      console.error('Error creating conversation:', error);
      // Provide more detailed error information
      throw new Error(`Failed to connect to backend: ${error.message || error}`);
    }
  },

  // Send a message and get a streaming response
  async sendMessage(conversationId, message) {
    try {
      console.log('Sending message to:', `${API_BASE_URL}/api/chat/${conversationId}/message`, 'Message:', message);
      const response = await fetch(`${API_BASE_URL}/api/chat/${conversationId}/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      console.log('Response received:', response);
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      return response;
    } catch (error) {
      console.error('Error sending message:', error);
      // Provide more detailed error information
      throw new Error(`Failed to connect to backend: ${error.message || error}`);
    }
  },

  // Query selected text context
  async querySelectedText(selectedText, context = '') {
    try {
      const response = await fetch(`${API_BASE_URL}/api/query/selection`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selected_text: selectedText,
          context
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error querying selected text:', error);
      // Provide more detailed error information
      throw new Error(`Failed to connect to backend: ${error.message || error}`);
    }
  }
};