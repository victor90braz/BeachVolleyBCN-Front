import { render, screen } from "@testing-library/react";
import MainComponent from "./MainComponent";

describe("Given a MainComponent", () => {
  describe("When its called to be rendered", () => {
    test("Then it should create a MainComponent with three list components", () => {
      const listItem = 3;

      render(<MainComponent />);

      const displayHeader = screen.getAllByRole("listitem");
      expect(displayHeader).toHaveLength(listItem);
    });
  });
});
