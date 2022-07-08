import { ThemeContext } from "@/context/theme";
import dark from "@/styles/themes/dark";
import light from "@/styles/themes/light";
import { useContext } from "react";

export const useSelectThemeStorybook = () => {
  const { handleChangeTheme } = useContext(ThemeContext);
  const changeThemeStorybook = (selectedTheme: string): void => {
    const theme = selectedTheme === "Dark" ? dark : light;
    handleChangeTheme(theme);
  };

  return {
    changeThemeStorybook,
  };
};
