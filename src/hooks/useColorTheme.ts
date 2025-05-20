import { useContext, useState, useEffect } from 'react';
import type { ColorMode } from '@/types/hooks';
import { ColorModeContext } from '@/contexts/ColorModeContext';

// Get initial color mode
function getInitialColorMode(): ColorMode {
  const savedMode = localStorage.getItem('colorMode') as ColorMode;
  if (savedMode) return savedMode;

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

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
  const [colorMode, setColorMode] = useState<ColorMode>(getInitialColorMode);

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
