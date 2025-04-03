import { ReactNode } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useColorMode, useColorModeState } from '@/hooks/useColorTheme';
import { ColorModeContext } from '@/contexts/ColorModeContext';

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
      {isLightMode ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
}
