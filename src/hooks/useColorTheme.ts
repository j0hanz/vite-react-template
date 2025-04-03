import { createContext, useContext, useState, useEffect } from 'react';

export type ColorMode = 'light' | 'dark';

export interface ColorModeValue {
  colorMode: ColorMode;
  toggleColorMode: () => void;
}

export const ColorMode = createContext<ColorModeValue | undefined>(undefined);

export function useColorMode() {
  const context = useContext(ColorMode);
  if (context === undefined) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
}

// Rename this function to follow React Hook naming conventions
export function useColorModeState() {
  const [colorMode, setColorMode] = useState<ColorMode>(() => {
    const savedMode = localStorage.getItem('colorMode') as ColorMode;
    if (savedMode) return savedMode;

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  const toggleColorMode = () => {
    setColorMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('colorMode', newMode);
      return newMode;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', colorMode);
  }, [colorMode]);

  return { colorMode, toggleColorMode };
}
