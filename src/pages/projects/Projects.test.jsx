import Projects from "./Projects";
import { render, screen } from "@testing-library/react";

it('should return a div element with the text "Projects"', () => {
  render(<Projects />);
  expect(screen.getByText("Projects")).toBeInTheDocument();
});
