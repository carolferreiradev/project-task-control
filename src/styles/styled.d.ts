import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      backgroundPrimary: string;
      backgroundSecondary: string;
      backgroundTertiary: string;

      insert: string;
      cancel: string;

      textPrimary: string;
      textSecondary: string;
      textTertiary: string;

      info: string;
      danger: string;
      success: string;
      warning: string;
    };
  }
}
