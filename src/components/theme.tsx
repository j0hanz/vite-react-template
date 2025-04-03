import { ReactNode } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { ColorMode, useColorMode, useColorModeState } from '@/hooks/theme';

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const colorModeState = useColorModeState();

  return (
    <ColorMode.Provider value={colorModeState}>{children}</ColorMode.Provider>
  );
}

export function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <button
      onClick={toggleColorMode}
      aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
      className="theme-toggle"
    >
      {colorMode === 'light' ? <FiMoon size={25} /> : <FiSun size={25} />}
    </button>
  );
}
