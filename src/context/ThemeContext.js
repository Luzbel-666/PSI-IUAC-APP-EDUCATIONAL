import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';
import { useColorScheme } from 'react-native';
import { lightColors, darkColors } from '../theme/colors';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [manualIsDarkMode, setManualIsDarkMode] = useState(null);

  const isDarkMode = manualIsDarkMode !== null
    ? manualIsDarkMode
    : systemColorScheme === 'dark';

  const toggleTheme = useCallback(() => {
    setManualIsDarkMode(!isDarkMode);
  }, [isDarkMode]);

  const theme = useMemo(() => ({
    isDarkMode,
    colors: isDarkMode ? darkColors : lightColors,
    toggleTheme,
  }), [isDarkMode, toggleTheme]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
