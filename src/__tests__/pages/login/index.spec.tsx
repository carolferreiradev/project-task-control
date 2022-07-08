import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Login from "@/pages/authentication/login";

import { ThemeProvider } from "@/context/theme";

describe("Pages => Login", () => {
  it("Render a component", () => {
    render(
      <ThemeProvider>
        <Login />
      </ThemeProvider>
    );

    const heading = screen.getByText(/Lorem ipsum/i);
    expect(heading).toBeInTheDocument();
  });
});
