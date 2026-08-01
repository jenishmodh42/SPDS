import React, { createContext, useContext, useState } from 'react';

export type CursorVariant = 'default' | 'hover' | 'view' | 'drag' | 'explore' | 'hidden';

interface CursorContextType {
  variant: CursorVariant;
  cursorText: string;
  setCursor: (variant: CursorVariant, text?: string) => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextType>({
  variant: 'default',
  cursorText: '',
  setCursor: () => {},
  resetCursor: () => {},
});

export const useCursor = () => useContext(CursorContext);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [cursorText, setCursorText] = useState<string>('');

  const setCursor = (newVariant: CursorVariant, text: string = '') => {
    setVariant(newVariant);
    setCursorText(text);
  };

  const resetCursor = () => {
    setVariant('default');
    setCursorText('');
  };

  return (
    <CursorContext.Provider value={{ variant, cursorText, setCursor, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
};
