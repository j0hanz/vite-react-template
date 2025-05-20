import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import type { ReactNode } from 'react';

import { ColorModeContext } from '@/contexts/ColorModeContext';
import { useColorMode, useColorModeState } from '@/hooks/useColorTheme';

// Provides the color mode context to child components
export function ColorModeProvider({ children }: { children: ReactNode }) {
  const colorModeState = useColorModeState();

  return (
    <ColorModeContext.Provider value={colorModeState}>
      {children}
    </ColorModeContext.Provider>
  );
}

// Button to toggle between light and dark modes
export function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === 'light';

  return (
    <button
      onClick={toggleColorMode}
      aria-label={`Switch to ${isLightMode ? 'dark' : 'light'} mode`}
      className="theme-toggle"
    >
      {isLightMode ? (
        <DarkModeIcon fontSize="small" />
      ) : (
        <LightModeIcon fontSize="small" />
      )}
    </button>
  );
}
