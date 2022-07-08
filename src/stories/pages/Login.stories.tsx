import { ComponentMeta } from "@storybook/react";
import LoginPage from "@/pages/login";
import { useSelectThemeStorybook } from "@/hooks/useSelectThemeStorybook";
import { useEffect } from "react";

interface Props {
  theme: string;
}

export default {
  title: "Pages/Login",
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

export const Login = (props: Props) => {
  const { theme } = props;
  const { changeThemeStorybook } = useSelectThemeStorybook();

  useEffect(() => {
    changeThemeStorybook(theme);
  }, [changeThemeStorybook, theme]);

  return <LoginPage />;
};
