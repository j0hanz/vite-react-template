import { createContext, useContext, useState, useEffect } from 'react';
import { ColorMode, ColorModeValue } from '@/types/hooks';

export const ColorModeContext = createContext<ColorModeValue | undefined>(
  undefined,
);

// Hook to access the color mode context
export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
}

// Hook to manage the color mode state
export function useColorModeState() {
  const [colorMode, setColorMode] = useState<ColorMode>(() => {
    const savedMode = localStorage.getItem('colorMode') as ColorMode;
    if (savedMode) return savedMode;

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  // Function to toggle between light and dark modes
  const toggleColorMode = () => {
    setColorMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('colorMode', newMode);
      return newMode;
    });
  };

  // Update the document's data-theme attribute when color mode changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', colorMode);
  }, [colorMode]);

  return { colorMode, toggleColorMode };
}
