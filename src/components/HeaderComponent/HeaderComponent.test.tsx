import { render, screen } from "@testing-library/react";
import HeaderComponent from "./HeaderComponent";

describe("Given a HeaderComponent", () => {
  describe("When it's invoked", () => {
    test("Then it should create a HeaderComponent with a tittle 'Beach Volley BCN'", () => {
      const expectedText = "Beach Volley BCN";

      render(<HeaderComponent />);

      const result = screen.getByRole("heading", { level: 1 });
      expect(result.textContent).toBe(expectedText);
    });

    test("Then it should create a HeaderComponent with an element 'Button'", () => {
      render(<HeaderComponent />);

      const elementButton = screen.getByRole("button");
      expect(elementButton).toBeInTheDocument();
    });
  });
});
