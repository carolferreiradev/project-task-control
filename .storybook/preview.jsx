import { ThemeProvider } from "@/context/theme";
import { GlobalStyle } from "@/styles/global";

export const argTypes = {
  theme: {
    control: "select",
    options: ["Light", "Dark"],
    description: "Choose theme to check component style changes.",
  },
};
export const args = { theme: "Dark" };

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  ),
];
