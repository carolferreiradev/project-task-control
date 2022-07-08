import { ReactNode, useState, createContext, useEffect } from "react";
import {
  DefaultTheme,
  ThemeProvider as ThemeProviderStyledComponents,
} from "styled-components";
import dark from "@/styles/themes/dark";

interface TodoProviderProps {
  children: ReactNode;
}

interface ThemeContextProps {
  theme: DefaultTheme;
  handleChangeTheme: (todo: DefaultTheme) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: TodoProviderProps) => {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const handleChangeTheme = (themeProp: DefaultTheme) => {
    setTheme(themeProp);
    localStorage.setItem("todo-theme", JSON.stringify(themeProp));
  };

  useEffect(() => {
    const actualTheme = localStorage && localStorage.getItem("todo-theme");
    if (!actualTheme) return setTheme(dark);
    setTheme(JSON.parse(actualTheme));
  }, []);

  return (
    <ThemeProviderStyledComponents theme={theme}>
      <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProviderStyledComponents>
  );
};
