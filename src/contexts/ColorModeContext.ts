import { createContext } from 'react';

import type { ColorModeValue } from '@/types/hooks';

export const ColorModeContext = createContext<ColorModeValue | undefined>(
  undefined,
);
