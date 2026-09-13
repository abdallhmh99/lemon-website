import React, { createContext, useContext, useState, useRef } from 'react';

const SoundContext = createContext(null);

export const SoundProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioCtxRef = useRef(null);

  const playCrunchSound = () => {
    // Artificial sound disabled per user preference for a quiet, high-end shopping experience
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, setSoundEnabled, playCrunchSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};
