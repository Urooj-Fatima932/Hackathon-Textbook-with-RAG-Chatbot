// src/hooks/useChatState.js
import { useState, useCallback } from 'react';
import { chatService } from '../services/chatService';

const useChatState = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState(null);

  // Initialize conversation if needed
  const ensureConversation = useCallback(async () => {
    if (!conversationId) {
      try {
        console.log('Creating new conversation...');
        const conv = await chatService.createConversation();
        console.log('Conversation created:', conv);
        setConversationId(conv.id);
        return conv.id;
      } catch (error) {
        console.error('Error creating conversation:', error);
        throw error;
      }
    }
    return conversationId;
  }, [conversationId]);

  // Send a message and handle the response
  const sendMessage = useCallback(async (text) => {
    if (!text.trim()) return;

    console.log('Sending message:', text);

    // Add user message to UI IMMEDIATELY (before any async operations)
    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Ensure conversation exists (happens in background while user sees their message)
      const convId = await ensureConversation();
      console.log('Using conversation ID:', convId);

      // Stream the response from the backend
      console.log('Calling chatService.sendMessage...');
      const response = await chatService.sendMessage(convId, text);
      console.log('Response received:', response);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      // Create a new AI message to append to
      const aiMessageId = `ai-${Date.now()}`;
      setMessages(prev => [
        ...prev,
        {
          id: aiMessageId,
          role: 'assistant',
          content: '',
          timestamp: new Date().toISOString()
        }
      ]);

      let aiMessageContent = '';
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;

        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          aiMessageContent += chunk;

          // Update the AI message in place
          setMessages(prev =>
            prev.map(msg =>
              msg.id === aiMessageId
                ? { ...msg, content: msg.content + chunk }
                : msg
            )
          );
        }
      }

      setIsLoading(false);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsLoading(false);

      // Add error message to chat
      setMessages(prev => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          role: 'assistant',
          content: 'Sorry, I encountered an error processing your request. Please try again.',
          timestamp: new Date().toISOString(),
          isError: true
        }
      ]);
    }
  }, [conversationId, ensureConversation]);

  const clearChat = useCallback(() => {
    setMessages([]);
    setConversationId(null);
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    clearChat,
    conversationId
  };
};

export default useChatState;