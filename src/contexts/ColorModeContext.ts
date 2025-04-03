import { createContext } from 'react';
import { ColorModeValue } from '@/types/hooks';

export const ColorModeContext = createContext<ColorModeValue | undefined>(
  undefined,
);
