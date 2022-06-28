import { render, screen } from "@testing-library/react";
import HeaderComponent from "./HeaderComponent";

describe("Given a HeaderComponent", () => {
  describe("When its called to be rendered", () => {
    test("Then it should create a HeaderComponent with a tittle 'Volley World'", () => {
      const expectedText = "Volley World";

      render(<HeaderComponent />);

      const result = screen.getByRole("heading", { level: 1 });
      expect(result.textContent).toBe(expectedText);
    });
  });
});
