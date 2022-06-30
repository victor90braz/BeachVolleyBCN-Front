import { render, screen } from "@testing-library/react";
import FooterComponent from "./FooterComponent";

describe("Given a FooterComponent", () => {
  describe("When its called to be rendered", () => {
    test("Then it should create a FooterComponent with five list components", () => {
      const listItem = 5;

      render(<FooterComponent />);

      const displayHeader = screen.getAllByRole("listitem");
      expect(displayHeader).toHaveLength(listItem);
    });
  });
});
