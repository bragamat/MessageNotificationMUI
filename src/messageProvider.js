import React, { createContext, useState, useCallback } from 'react';

export const MessageContext = createContext({
  message: null,
  addMessage: null,
  removeMessage: null
});

const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState(null);

  const removeMessage = () => {
    setMessage(null);
  };

  const addMessage = (title, text, type) => {
    setMessage({ title, text, type });
  };

  const contextValue = {
    message,
    addMessage: useCallback(
      (title, text, type) => addMessage(title, text, type),
      []
    ),
    removeMessage: useCallback(() => removeMessage(), [])
  };

  return (
    <MessageContext.Provider value={contextValue}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
