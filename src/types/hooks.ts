// Define the possible color modes
export type ColorMode = 'light' | 'dark';

export interface ColorModeValue {
  colorMode: ColorMode;
  toggleColorMode: () => void;
}
